"use client"
import CartContext from "@/app/checkout/CartContext";
import { useContext } from "react";

export default function AddToCart(props: {handle: string}) {

    const {addItemToCart} = useContext(CartContext)

    const addToCart = () => {
        addItemToCart(props.handle);
    }

    return (
        <button onClick={addToCart}>Add to Cart!</button>
    )
}