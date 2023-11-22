'use client';

import CartContext from "@/app/checkout/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function CartItems() {
    const { cartItems }  = useContext(CartContext);

    return(
        <>
        {cartItems.map((item) => <CartItem key={item.variantId} item={item}/>)}
        </>
    )
}