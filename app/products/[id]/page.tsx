import gqlQuery from "@/app/lib/shopifyService";

export default async function Product({params} : 
    { params: { id: string } }) {

    let query = `{
        productByHandle(handle : "${params.id}") {
            title
        }
      }`;
      console.log(query);
    let product = await gqlQuery(query, {});
    console.log(product);

    return (
        <h1>Product Page for {product.data.productByHandle.title}</h1>
        
    )
}