import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
    return (
        <>
            <div className="p-4 sm:p-0 min-h-screen">
            <p className="font-bold text-3xl mb-4">Your Cart</p>
            <div className="sm:grid flex flex-col grid-cols-2">
                <CartItems />
                <OrderSummary />
            </div>
            </div>
        </>
    )
}