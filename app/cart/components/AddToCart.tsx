"use client"
import CartContext, {CartItem, CartItemVariant} from "@/app/checkout/CartContext";
import {useContext, useEffect, useState} from "react";
import Link from "next/link";

export default function AddToCart({product, variants}: {product: CartItem, variants: CartItemVariant[]}) {

    const { addItemToCart } = useContext(CartContext);
    const [allOutOfStock, setAllOutOfStock] = useState(false);
    const [variantId, setVariantId] = useState(getFirstInStockVariant(variants).node.id);
    const [variantTitle, setVariantTitle] = useState(getFirstInStockVariant(variants).node.title);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        const isStock = doesAnyStockExist(variants);
        if (isStock) {
            let item = getFirstInStockVariant(variants);
            setVariantId(item.node.id);
            setVariantTitle(item.node.title);
            setAllOutOfStock(false);
        } else {
            setAllOutOfStock(true);
        }
    }, [variants]); // Depend on variants, re-run if variants change

    function doesAnyStockExist(variants: CartItemVariant[]): boolean {
        let find = variants.find(v => v.node.availableForSale)
        return find != undefined;
    }

    function getFirstInStockVariant(variants: CartItemVariant[]): CartItemVariant {
        let find = variants.find(v => v.node.availableForSale)
        if (find == undefined) {
            return variants[0]
        }
        return find;
    }

    const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVariantId(e.target.value);
        let filtered = variants.filter(variant => {
            return variant.node.id === e.target.value
        })
        setVariantTitle(filtered[0].node.title)
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

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
        <div className="flex flex-col items-center justify-between">
            <div className="flex-col sm:flex-row w-full justify-around items-start">
                {(variants.length > 1 && !allOutOfStock) && <div className="flex flex-col items-center my-4">
                    <p className={"items-center"}>Quantity</p>
                    <div className="flex items-center">
                        <button onClick={decrementQuantity}
                                className="px-3 py-1 bg-darkGrey-100 hover:bg-black rounded-lg text-white">-
                        </button>
                        <span className="mx-3">{quantity}</span>
                        <button onClick={incrementQuantity}
                                className="px-3 py-1 bg-darkGrey-100 hover:bg-black rounded-lg text-white">+
                        </button>
                    </div>
                </div>}
                {(variants.length > 1 && !allOutOfStock) && <div className="my-4 flex flex-col items-center">
                    <p>Variant</p>
                    <select value={variantId} onChange={handleVariantChange} className="mb-6 w-24 rounded-xl">
                        {variants.map(variant => <option key={variant.node.id} value={variant.node.id} disabled={!variant.node.availableForSale}>{variant.node.title}</option>)}
                    </select>
                </div>}
                {(allOutOfStock) && <div className="my-4 flex flex-col items-center">
                    <div>
                        <p className="font-bold text-2xl">This product is out of stock!</p>
                        <p>See our collection <Link href="/products" className="underline font-bold">here</Link></p>
                    </div>
                </div>}
            </div>
            {(variants.length > 1 && !allOutOfStock) && <div className="flex flex-row justify-center">
                <a href="#"
                   className="flex items-center text-center justify-center rounded-xl border border-transparent bg-darkGrey-100 hover:bg-black px-6 mx-6 py-3 text-white text-md sm:text-xl shadow-sm"
                   onClick={addToCart}>Add to Cart</a>
                <a href='/cart'
                   className="flex items-center text-center justify-center rounded-xl border border-transparent bg-darkGrey-100 hover:bg-black px-6 mx-6 py-3 text-md sm:text-xl text-white shadow-sm">Go
                    to Cart</a>
            </div>}
        </div>



    )
}
