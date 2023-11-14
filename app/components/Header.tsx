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
                <Link href={'/'} className="bg-black text-white">
                    Clever Kitchen
                </Link>
            </div>
            <div className='col-span-full flex-col text-center sm:flex-row sm:justify-around flex md:justify-around pt-2 pb-2'>
                <Link href={'/products'} className="bg-black text-white">
                    Products
                </Link>
                <Link href={'/cart'} className="bg-black text-white">
                    Cart
                </Link>
            </div>
        </>
    )
}