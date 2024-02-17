'use client';
import CartContext from "@/app/checkout/CartContext";
import Checkout from "@/app/checkout/components/Checkout";
import Link from "next/link";
import { useContext } from "react";

export default function OrderSummary() {

    const {cartTotal} = useContext(CartContext);
    const amountToSpendToQualifyForFreeShipping: number = 20;
    const shippingPriceToUK: number = 1.99;
    let shippingPriceMessage: string;

    if (cartTotal >= amountToSpendToQualifyForFreeShipping) {
        shippingPriceMessage = "Shipping: FREE";
    } else {
        shippingPriceMessage = `Shipping: £${shippingPriceToUK.toFixed(2)}`;
    }


    return (
        <>  
            {cartTotal > 0 ? <div className="text-left sm:text-center p-10">
            <p className="text-2xl">Order Summary</p>
            <p>Tax: <span className="font-light text-md text-price-100">FREE</span></p>
            <p>Shipping: <span className="font-light text-md text-price-100">{shippingPriceMessage}</span></p>
                <p>Total: <span className="font-light text-[24px] text-price-100">£{(parseFloat(cartTotal.toFixed(2)) + shippingPriceToUK).toFixed(2)}</span></p>
                {cartTotal < amountToSpendToQualifyForFreeShipping &&
                    <p className="text-md text-red-500 italic">Spend just £{(amountToSpendToQualifyForFreeShipping - cartTotal).toFixed(2)} more to qualify for free shipping</p>
                }



                <Checkout />
            </div> : <div>
                        <p className="font-bold text-2xl">There&apos;s nothing here yet!</p>
                        <p>See our collection <Link href="/products" className="underline font-bold">here</Link></p>
                    </div>}
        </>
    )
}