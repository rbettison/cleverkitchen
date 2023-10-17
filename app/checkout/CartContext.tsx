"use client";
import { createContext, useState } from "react";


export type CartContextType = {
    cartItems: {handle: string, variantId: string}[];
    addItemToCart: (item: {handle: string, variantId: string}) => void;
};
const CartContext = createContext<CartContextType>({cartItems: [], addItemToCart: () => {}});


export const CartProvider = ({ children } : {
    children: React.ReactNode
  }) => {

    const[cartItems, setCartItems] = useState<{handle: string, variantId: string}[]>([]);

    const addItemToCart = (item: {handle: string, variantId: string}) => {
        let isItemInCart = false;

        cartItems.forEach((currentItem) => {
            if(currentItem.handle === item.handle) {
                isItemInCart = true;
            }
        })

        if(isItemInCart) {

        } else {
            let newCartItems: {handle: string, variantId: string}[] = [...(cartItems), item];
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