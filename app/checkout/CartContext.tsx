"use client";
import { createContext, useEffect, useState } from "react";


export type CartContextType = {
    cartItems: CartItem[];
    addItemToCart: (item: CartItem) => void;
    cartTotal: number;
    numberItems: number;
    removeItemFromCart: (item: CartItem) => void;
    alterItemQuantity: (item: CartItem, addToCurrentValue: boolean) => void;
};
const CartContext = createContext<CartContextType>({cartItems: [], 
                        addItemToCart: () => {}, 
                        cartTotal: 0, 
                        numberItems: 0,
                        removeItemFromCart: () => {},
                        alterItemQuantity: () => {}});
export type CartItem = {
    title: string,
    handle: string, 
    variantId: string,
    variantTitle: string,
    image: string,
    price: number,
    description: string,
    quantity: number
}

export type CartItemVariant = {
    node: {
        title: string,
        id: string
    }
}


export const CartProvider = ({ children } : {
    children: React.ReactNode
  }) => {

    const getLocalCartData = () => {
        if(typeof window !== 'undefined') {
            let localCartItems = localStorage.getItem("cartItems");
            if(localCartItems != null) return JSON.parse(localCartItems);
            return []
        }
        return [];
    }
    
    const[cartItems, setCartItems] = useState<CartItem[]>(getLocalCartData());
    const [cartTotal, setCartTotal] = useState<number>(0);
    const [numberItems, setNumberItems] = useState<number>(0);

    
    useEffect(() => {
        let total: number = 0;
        let itemTotal: number = 0;
        cartItems.forEach((cartItem) => {
            total = Number(total) + (Number(cartItem.quantity) * Number(cartItem.price));
            itemTotal = itemTotal + cartItem.quantity;
        })
        setCartTotal(total);
        setNumberItems(itemTotal)
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item: CartItem) => {
        let isItemInCart = false;

        cartItems.forEach((currentItem) => {
            if(currentItem.handle === item.handle && item.variantId === currentItem.variantId) {
                isItemInCart = true;
            }
        })

        if(isItemInCart) {
            alterItemQuantity(item, true)
        } else {
            let newCartItems: CartItem[] = [...(cartItems), item];
            setCartItems(newCartItems);
        }
    }

    const removeItemFromCart = (cartItem: CartItem) => {

        let newCartItems = cartItems.filter((item) => cartItem.variantId != item.variantId);
        setCartItems(newCartItems);
    }

    const alterItemQuantity = (cartItem: CartItem, addToCurrentValue: boolean) => {

        if(cartItem.quantity === 0) {
            removeItemFromCart(cartItem)
        } else {
            let newCartItems = cartItems.map((item) => {
                if(item.handle === cartItem.handle && item.variantId === cartItem.variantId) {
                    addToCurrentValue? item.quantity = Number(item.quantity) + Number(cartItem.quantity) : item.quantity = cartItem.quantity;
                }
                return item;
            })
            setCartItems(newCartItems);
        }
        
    }

    return (
        <CartContext.Provider value={{cartItems, addItemToCart, cartTotal, numberItems, removeItemFromCart, alterItemQuantity}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContext;