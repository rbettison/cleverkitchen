'use client';

import CartContext from "@/app/checkout/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function CartItems() {
    const { cartItems }  = useContext(CartContext);

    return(
        <>
        <div className="flex flex-col gap-4">
        {cartItems.map((item) => <CartItem key={item.variantId} item={item}/>)}
        </div>
        </>
    )
}