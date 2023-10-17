import { CartProvider } from "@/app/checkout/CartContext";
import Checkout from "@/app/checkout/components/Checkout";
import gqlQuery from "@/app/lib/shopifyService";
import { useContext } from "react";
import CartContext from "@/app/checkout/CartContext";


export default async function Product({params} : 
    { params: { id: string } }) {

    const {addItemToCart} = useContext(CartContext);

    let query = `query SingleProduct($handle: String!) {
        product(handle : $handle) {
            title
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }`;
    let product = await gqlQuery(query, { "handle" : params.id});
    console.log(product);

    const addToCart = () => {
      addItemToCart(params.id);
    }

    return (
        <>
        <h1>Product Page for {product.data.product.title}</h1>
        <button onClick={addToCart}>Add to Cart!</button>
        <Checkout variantId={product.data.product.variants.edges[0].node.id}/>
        </>
    )
}