"use client"
import { useContext } from "react";
import CartContext from "../checkout/CartContext";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {

    const { cartItems } = useContext(CartContext)

    return (
        <>
            <div className='col-start-1 col-end-7 flex justify-center'>
                CLEVER KITCHEN
            </div>
            <div className='col-start-1 col-end-7 flex justify-around justify-items-center'>
                <Link href={'/products'}>
                    PRODUCTS
                </Link>
                <Link href={'/products'}>
                    CART
                </Link>
            </div>
        </>
    )
}