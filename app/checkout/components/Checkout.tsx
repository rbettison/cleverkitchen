"use client";
import { useState, useContext } from "react";
import CartContext from "../CartContext";


export default function Checkout() {

    const [loading, setLoading] = useState(false); 
    const { cartItems } = useContext(CartContext);   

    async function checkout() {
        setLoading(true);
        let resp = await fetch("/checkout", {
            method: 'POST',
            body: JSON.stringify({
                variants : cartItems.map((item) => item.variantId)
            })
        })
        let json = await resp.json();
        console.log(JSON.stringify(json));
        window.location.href = json.data.checkoutCreate.checkout.webUrl;
    }

    return (
        <>
        <button onClick={checkout}>Check out cart</button>
        {loading && <p>Checking out...</p>}
        </>
    )
}