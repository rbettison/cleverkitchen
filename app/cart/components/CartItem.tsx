'use client'
import CartContext, { CartItem } from "@/app/checkout/CartContext";
import { useContext, useState } from "react";

export default function CartItem({item}: {item: CartItem}) {

    const {removeItemFromCart, alterItemQuantity} = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity);

    function handleRemoveItem() {
        removeItemFromCart(item)
    }

    function handleQuantityChange(event: React.FormEvent<HTMLInputElement>) {
        let quantityChange;

        if(Number(event.currentTarget.value) < 1) quantityChange = 1;
        else quantityChange = Number(event.currentTarget.value);

        setQuantity(quantityChange)
        item.quantity = quantityChange;
        alterItemQuantity(item);
    }

    return(
        <>
        <div className="grid grid-cols-2 grid-rows-5 p-5 border-b-sky-800 border rounded-lg">
            <img src={item.image} 
                className="cols-start-1 col-span-1 row-start-1 row-span-4"/>
            <div className="cols-start-2 col-span-1 row-start-1 row-span-4 p-3">
                <p>Product: {item.title}</p>
                <p>CartItem: {item.handle}</p>
                <p>price: {item.price}</p>
            </div>
            <div className="row-start-5 row-span-1 col-span-2 flex flex-row justify-center content-center">
                <div><p>quantity:</p> <input onChange={handleQuantityChange} value={quantity}/></div>
                <button onClick={handleRemoveItem}>remove</button>
            </div>
        </div>
        
        

        </>
    )
}