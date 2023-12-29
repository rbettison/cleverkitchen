"use client"
import CartContext, {CartItem, CartItemVariant} from "@/app/checkout/CartContext";
import { useContext, useState } from "react";

export default function AddToCart({product, variants}: {product: CartItem, variants: CartItemVariant[]}) {

    const { addItemToCart } = useContext(CartContext);
    const [variantId, setVariantId] = useState(variants[0].node.id);
    const [variantTitle, setVariantTitle] = useState(variants[0].node.title);
    const maxQuantity = Array.apply(null, Array(15)).map(function (y, i) { return i + 1; });
    const [quantity, setQuantity] = useState(1);

    const handleVariantChange = (e) => {
        setVariantId(e.target.value);
        let filtered = variants.filter(variant => {
            return variant.node.id === e.target.value
        })
        setVariantTitle(filtered[0].node.title)
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const addToCart = () => {
        addItemToCart({
            title: product.title,
            handle: product.handle,
            variantId: variantId,
            variantTitle: variantTitle,
            image: product.image,
            price: product.price,
            quantity: quantity
        });
    }

    return (
        <div className="mt-6">
            <div>
                <p>quantity:</p>
                <select onChange={handleQuantityChange} value={quantity}>
                    {maxQuantity.map(index => <option key={index} value={index}>{index}</option>)}
                </select>
            </div>
            {variants.length > 1 && <div>
                <p>variant:</p>
                <select value={variantId} onChange={handleVariantChange}>
                    {variants.map(variant => <option key={variant.node.id} value={variant.node.id}>{variant.node.title}</option>)}
                </select>
            </div>}
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={addToCart}>Add to Cart</a>
        </div>
    )
}
