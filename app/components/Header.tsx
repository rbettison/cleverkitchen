"use client"
import { useContext } from "react";
import CartContext from "../checkout/CartContext";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {

    const { cartItems } = useContext(CartContext)

    return (
        <div className="flex flex-col justify-center items-center pt-4 pb-4 gap-3">
            <h1 className="uppercase font-extrabold text-4xl text-center">Clever Kitchen</h1>
            <Link href="/cart"><CartIcon number={cartItems.length}/></Link>
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
        </div>
    )
}