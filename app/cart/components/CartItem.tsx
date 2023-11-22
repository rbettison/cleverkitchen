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
        <p>Product: {item.title}</p>
        <p>CartItem: {item.handle}</p>
        <img src={item.image} />
        <p>price: {item.price}</p>
        <p>quantity:</p> <input onChange={handleQuantityChange} value={quantity}/>
        <button onClick={handleRemoveItem}>remove</button>

        </>
    )
}