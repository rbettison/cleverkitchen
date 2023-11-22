import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
    return (
        <h1>
            Your Cart
            <CartItems />
            <OrderSummary />
        </h1>
    )
}