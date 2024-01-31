'use client'
import CartContext, { CartItem } from "@/app/checkout/CartContext";
import Link from "next/link";
import { useContext, useState } from "react";

export default function CartItem({item}: {item: CartItem}) {

    const {removeItemFromCart, alterItemQuantity} = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity);
    const maxQuantity = Array.apply(null, Array(15)).map(function (y, i) { return i + 1; });

    function handleRemoveItem() {
        removeItemFromCart(item)
    }

    function handleQuantityChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let quantityChange;

        if(Number(event.currentTarget.value) < 1) quantityChange = 1;
        else quantityChange = Number(event.currentTarget.value);

        setQuantity(quantityChange)
        item.quantity = quantityChange;
        alterItemQuantity(item, false);
    }

    return(
        <>
            <div className="grid grid-cols-2 grid-rows-5 p-5 border-border-100 border rounded-lg">
                <img src={item.image} 
                    className="cols-start-1 col-span-1 row-start-1 row-span-4"/>
                <div className="cols-start-2 col-span-1 row-start-1 row-span-4 px-3">
                    <Link href={`/products/${item.handle}`} className="text-xl font-bold underline">{item.title}</Link>
                    <p className="font-bold">{item.variantTitle}</p>
                    {/* <p>{item.description}</p> */}
                    <p className="font-light text-[24px] text-price-100">£{item.price}</p>
                </div>
                <div className="row-start-5 row-span-1 col-span-2 flex flex-row items-center justify-between content-center">
                    <svg onClick={handleRemoveItem} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <div>
                        <select onChange={handleQuantityChange} value={quantity}>
                            {maxQuantity.map(index => <option key={index} value={index}>{index}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        
        

        </>
    )
}