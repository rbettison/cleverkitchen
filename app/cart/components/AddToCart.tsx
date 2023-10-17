"use client"
import CartContext from "@/app/checkout/CartContext";
import { useContext } from "react";

export default function AddToCart(props: {handle: string, variantId: string}) {

    const {addItemToCart} = useContext(CartContext)



    const addToCart = () => {
        addItemToCart({
            handle: props.handle,
            variantId: props.variantId
        });
    }

    return (
        <button onClick={addToCart}>Add to Cart!</button>
    )
}