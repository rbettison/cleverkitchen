"use client";
import { useState, useContext } from "react";
import CartContext from "../CartContext";


export default function Checkout() {

    const [loading, setLoading] = useState(false); 
    const { cartItems } = useContext(CartContext);   

    async function checkout() {
        setLoading(true);
        cartItems.forEach(item => {
            console.log("cart item: ", item)
        })
        let resp = await fetch("/checkout", {
            method: 'POST',
            body: JSON.stringify({
                variants : cartItems.map((item) => {
                    return {
                        variant:item.variantId,
                        quantity: item.quantity
                    }
                })
            })
        })
        console.log('resp: ' + JSON.stringify(resp));
        let json = await resp.json();
        console.log(JSON.stringify(json));
        window.location.href = json.data.checkoutCreate.checkout.webUrl;
    }

    return (
        <>
        <div className="mt-6">
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={checkout}>
                {loading ? <p>Checking out...</p> : <p>Check out</p>}</a>
        </div>
        </>
    )
}