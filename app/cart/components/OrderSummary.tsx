'use client';
import CartContext from "@/app/checkout/CartContext";
import Checkout from "@/app/checkout/components/Checkout";
import { useContext } from "react";

export default function OrderSummary() {

    const {cartTotal} = useContext(CartContext);

    return (
        <>  
            <p>Order Summary</p>
            <p>Total: {cartTotal}</p>

            <Checkout />
        </>
    )
}