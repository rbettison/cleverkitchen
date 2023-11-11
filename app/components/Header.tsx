"use client"
import { useContext } from "react";
import CartContext from "../checkout/CartContext";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {

    const { cartItems } = useContext(CartContext)

    return (
        <>
            <div className='col-span-full flex justify-center pt-2 pb-2'>
                <Link href={'/'}>
                    Clever Kitchen
                </Link>
            </div>
            <div className='col-span-full flex-col text-center sm:flex-row sm:justify-around flex md:justify-around pt-2 pb-2'>
                <Link href={'/products'}>
                    Products
                </Link>
                <Link href={'/cart'}>
                    Cart
                </Link>
            </div>
        </>
    )
}