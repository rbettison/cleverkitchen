import ProductCard from "../components/ProductCard";
import {getProducts} from "../server/ProductService"
import Link from "next/link";

export default async function Products() {
     let products = await getProducts(8);

    return (

        <div className="container col-span-5 bg-fixed mt-40 mb-64 sm:mb-64 sm:mt-0">

                
                <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 w-full mt-24">
                    {products.data.products.edges.map((edge: any) => <ProductCard key={edge.node.handle} 
                                                                                    title={edge.node.title}
                                                                                  handle={edge.node.handle}
                                                                                  image={edge.node.images.edges[0] != null ?
                                                                                      edge.node.images.edges[0].node.url : ''}
                                                                                  price={edge.node.priceRange.maxVariantPrice.amount}
                                                                                  currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />)}
                </div>


        </div>
    )
}