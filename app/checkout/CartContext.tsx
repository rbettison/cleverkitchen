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

    const[cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);


    // useReducer instead here?
    useEffect(() => {
        console.log('use effect triggered');
        let total: number = 0;
        cartItems.forEach((cartItem) => {
            console.log('cartItem.quantity: ' + cartItem.quantity);
            console.log('cartItem.price: ' + cartItem.price);
            total = Number(total) + (Number(cartItem.quantity) * Number(cartItem.price));
        })
        console.log('total: ' + total);
        setCartTotal(total);
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