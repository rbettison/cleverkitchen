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
            <div className="grid grid-cols-2 grid-rows-5 p-5 border-b-sky-800 border rounded-lg">
                <img src={item.image} 
                    className="cols-start-1 col-span-1 row-start-1 row-span-4"/>
                <Link href={`/products/${item.handle}`} className="cols-start-2 col-span-1 row-start-1 row-span-4 p-3">
                    <p>Product: {item.title}</p>
                    <p>Variant: {item.variantTitle}</p>
                    <p>CartItem: {item.handle}</p>
                    <p>price: {item.price}</p>
                </Link>
                <div className="row-start-5 row-span-1 col-span-2 flex flex-row justify-center content-center">
                    <div>
                        <p>quantity:</p> 
                        <select onChange={handleQuantityChange} value={quantity}>
                            {maxQuantity.map(index => <option key={index} value={index}>{index}</option>)}
                        </select>
                    </div>
                    <button onClick={handleRemoveItem}>remove</button>
                </div>
            </div>
        
        

        </>
    )
}