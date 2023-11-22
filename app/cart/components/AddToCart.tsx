"use client"
import CartContext, { CartItem } from "@/app/checkout/CartContext";
import { useContext } from "react";

export default function AddToCart({product}: {product: CartItem}) {

    const {addItemToCart} = useContext(CartContext)

    const addToCart = () => {
        addItemToCart({
            title: product.title,
            handle: product.handle,
            variantId: product.variantId,
            image: product.image,
            price: product.price,
            quantity: 1
        });
    }

    return (
        <div className="mt-6">
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={addToCart}>Add to Cart</a>
        </div>
    )
}