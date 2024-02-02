"use client"
import CartContext, {CartItem, CartItemVariant} from "@/app/checkout/CartContext";
import { useContext, useState } from "react";

export default function AddToCart({product, variants}: {product: CartItem, variants: CartItemVariant[]}) {

    const { addItemToCart } = useContext(CartContext);
    const [variantId, setVariantId] = useState(variants[0].node.id);
    const [variantTitle, setVariantTitle] = useState(variants[0].node.title);
    const maxQuantity = Array.apply(null, Array(15)).map(function (y, i) { return i + 1; });
    const [quantity, setQuantity] = useState(1);

    const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVariantId(e.target.value);
        let filtered = variants.filter(variant => {
            return variant.node.id === e.target.value
        })
        setVariantTitle(filtered[0].node.title)
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(e.target.value))
    }

    const addToCart = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        addItemToCart({
            title: product.title,
            handle: product.handle,
            variantId: variantId,
            variantTitle: variantTitle,
            image: product.image,
            price: product.price,
            quantity: quantity,
            description: product.description
        });
    }

    return (
        <div className="">
            <div>
                <p>Quantity:</p>
                <select className={"mb-6"} onChange={handleQuantityChange} value={quantity}>
                    {maxQuantity.map(index => <option key={index} value={index}>{index}</option>)}
                </select>
            </div>
            {variants.length > 1 && <div>
                <p>Variant:</p>
                <select value={variantId} onChange={handleVariantChange} className={"mb-6"}>
                    {variants.map(variant => <option key={variant.node.id} value={variant.node.id}>{variant.node.title}</option>)}
                </select>
            </div>}
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={addToCart}>Add to Cart</a>
        </div>
    )
}
