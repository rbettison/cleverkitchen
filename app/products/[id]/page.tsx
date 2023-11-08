import Checkout from "@/app/checkout/components/Checkout";
import gqlQuery from "@/app/lib/shopifyService";
import AddToCart from "@/app/cart/components/AddToCart";
import ImageCarousel from "@/app/components/ImageCarousel";


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
          },
          images(first: 5) {
            edges {
                node {
                url
                }
            }
          }
        }
      }`;
    let product = await gqlQuery(query, { "handle" : params.id});
    let images : string[] = product.data.product.images.edges.map((edge: {node: { url : string}}) => edge.node.url);
    console.log(product);

    return (
        <div className="container p-8 col-span-5">
          <h1 className="text-4xl text-primary-200 pb-4 border-b border-primary-100">{product.data.product.title}</h1>
          <div className="grid grid-cols-2 p-5 w-full gap-4 bg-gray-100">
          <div className="grid grid-cols-2 gap-4">
          <AddToCart handle={params.id} variantId={product.data.product.variants.edges[0].node.id}/>
          <Checkout />
          </div>
          <ImageCarousel images={images} />
          </div>
        </div>
    )
}