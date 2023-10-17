"use client";
import { createContext, useState } from "react";


export type CartContextType = {
    cartItems: string[];
    addItemToCart: (item: string) => void;
};
const CartContext = createContext<CartContextType>({cartItems: [], addItemToCart: () => {}});


export const CartProvider = ({ children } : {
    children: React.ReactNode
  }) => {

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