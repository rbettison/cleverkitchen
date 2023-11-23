'use client';
import CartContext from "@/app/checkout/CartContext";
import Checkout from "@/app/checkout/components/Checkout";
import { useContext } from "react";

export default function OrderSummary() {

    const {cartTotal} = useContext(CartContext);

    return (
        <>  
            <div className="text-center p-10">
            <p>Order Summary</p>
            <p>Total: {cartTotal}</p>
            <p>Tax: £0</p>
            <p>Shipping: £0</p>

            <Checkout />
            </div>
        </>
    )
}