import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
    return (
        <>
            <p className="font-bold text-3xl mb-4">Your Cart</p>
            <div className="grid grid-cols-2">
                <CartItems />
                <OrderSummary />
            </div>
            
        </>
    )
}