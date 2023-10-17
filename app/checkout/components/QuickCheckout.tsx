"use client";
import { useState } from "react";


export default function QuickCheckout(props: {variantId: string}) {

    const [loading, setLoading] = useState(false);    

    async function checkout() {
        setLoading(true);
        let resp = await fetch("/checkout?variantId=" + props.variantId)
        let json = await resp.json();
        window.location.href = json.data.checkoutCreate.checkout.webUrl;
    }

    return (
        <>
        <button onClick={checkout}>Quick check out</button>
        {loading && <p>Checking out...</p>}
        </>
    )
}