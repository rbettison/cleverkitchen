"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";


type CartContextType = {
    cartItems: string[],
    addItemToCart: (item: string) => void
};
const CartContext = createContext<CartContextType | null>(null);


export const CartProvider = ({ children }) => {

    const[cartItems, setCartItems] = useState<string[]>([]);

    const addItemToCart = (item: string) => {
        let isItemInCart = false;

        cartItems.forEach((currentItem) => {
            if(currentItem === item) {
                isItemInCart = true;
            }
        })

        if(isItemInCart) {

        } else {
            let newCartItems: string[] = [...(cartItems), item];
            setCartItems(newCartItems);
        }
    }


    return (
        <CartContext.Provider value={{cartItems, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContext;