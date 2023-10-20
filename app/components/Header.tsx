"use client"
import { useContext } from "react";
import CartContext from "../checkout/CartContext";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {

    const { cartItems } = useContext(CartContext)

    return (
        <div className="flex flex-col items-end pt-4 pb-4 gap-3 text-right">
            <div>
            <h1 className="uppercase font-extrabold text-4xl">Clever Kitchen</h1>
            </div>
            <div>
            <Link href="/cart"><CartIcon number={cartItems.length}/></Link>
            </div>
            <div>
            <Link href="/" className="hover:underline text-sm">Home</Link>
            </div>
            <div>
            <Link href="/products" className="hover:underline text-sm">Products</Link>
            </div>
        </div>
    )
}