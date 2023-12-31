'use client'
import { useContext } from "react"
import CartContext from "../checkout/CartContext"

export default function CartIcon() {

    const { numberItems } = useContext(CartContext)

    return (
        <div className="flex justify-center items-center">
            <div className="relative py-2">
                <div className="t-0 absolute left-6">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{numberItems}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M20.0634 10.0999L21.5057 19.4749C21.6999 20.7369 20.7234 21.875 19.4467 21.875H5.55335C4.27651 21.875 3.30009 20.7369 3.49425 19.4749L4.93655 10.0999C5.09291 9.08356 5.96739 8.33333 6.99566 8.33333H18.0044C19.0326 8.33333 19.9071 9.08356 20.0634 10.0999Z" stroke="#363636" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5833 5.20833C14.5833 4.05774 13.6506 3.125 12.5 3.125C11.3494 3.125 10.4167 4.05774 10.4167 5.20833" stroke="#363636" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </div>
        </div>
    )
}