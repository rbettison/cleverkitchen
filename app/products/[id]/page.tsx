import Checkout from "@/app/checkout/components/Checkout";
import gqlQuery from "@/app/lib/shopifyService";


export default async function Product({params} : 
    { params: { id: string } }) {

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


    return (
        <>
        <h1>Product Page for {product.data.product.title}</h1>
        <Checkout variantId={product.data.product.variants.edges[0].node.id}/>
        </>
    )
}