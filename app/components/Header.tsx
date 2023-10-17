"use client"
import { useContext } from "react";
import CartContext from "../checkout/CartContext";
import Checkout from "../checkout/components/Checkout";

export default function Header() {

    const { cartItems } = useContext(CartContext)

    return (
        <>
            <h1>Header</h1>
            <p>Number of items in the cart: {cartItems.length}</p>
            <Checkout />
        </>
    )
}