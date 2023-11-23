"use client";
import { createContext, useEffect, useState } from "react";


export type CartContextType = {
    cartItems: CartItem[];
    addItemToCart: (item: CartItem) => void;
    cartTotal: number;
    removeItemFromCart: (item: CartItem) => void;
    alterItemQuantity: (item: CartItem) => void;
};
const CartContext = createContext<CartContextType>({cartItems: [], 
                        addItemToCart: () => {}, 
                        cartTotal: 0, 
                        removeItemFromCart: () => {},
                        alterItemQuantity: () => {}});
export type CartItem = {
    title: string,
    handle: string, 
    variantId: string,
    image: string,
    price: number,
    quantity: number
}


export const CartProvider = ({ children } : {
    children: React.ReactNode
  }) => {

    const getLocalCartData = () => {
        if(window != undefined) {
            let localCartItems = localStorage.getItem("cartItems");
            if(localCartItems != null) return JSON.parse(localCartItems);
            return []
        }
    }
    
    const[cartItems, setCartItems] = useState<CartItem[]>(getLocalCartData());
    const [cartTotal, setCartTotal] = useState<number>(0);

    
    useEffect(() => {
        let total: number = 0;
        cartItems.forEach((cartItem) => {
            total = Number(total) + (Number(cartItem.quantity) * Number(cartItem.price));
        })
        setCartTotal(total);
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item: CartItem) => {
        let isItemInCart = false;

        cartItems.forEach((currentItem) => {
            if(currentItem.handle === item.handle) {
                isItemInCart = true;
            }
        })

        if(isItemInCart) {

        } else {
            let newCartItems: CartItem[] = [...(cartItems), item];
            setCartItems(newCartItems);
        }
    }

    const removeItemFromCart = (cartItem: CartItem) => {

        let newCartItems = cartItems.filter((item) => cartItem.handle != item.handle);
        setCartItems(newCartItems);
    }

    const alterItemQuantity = (cartItem: CartItem) => {

        if(cartItem.quantity === 0) {
            removeItemFromCart(cartItem)
        } else {
            let newCartItems = cartItems.map((item) => {
                if(item.handle === cartItem.handle) {
                    item.quantity = cartItem.quantity;
                }
                return item;
            })
            setCartItems(newCartItems);
        }
        
    }

    return (
        <CartContext.Provider value={{cartItems, addItemToCart, cartTotal, removeItemFromCart, alterItemQuantity}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContext;