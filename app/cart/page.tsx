import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
    return (
        <>
            <div className="pb-52 pl-4 pr-4 pt-40 sm:pt-24">
            <p className="font-bold text-3xl mb-4">Your Cart</p>
            <div className="sm:grid flex flex-col grid-cols-2">
                <CartItems />
                <OrderSummary />
            </div>
            </div>
        </>
    )
}