import ProductCard from "../components/ProductCard";
import {getProducts} from "../server/ProductService"

export default async function Products() {
     let products = await getProducts(8);
    

    return (

        <div className="h-screen container col-span-5 bg-fixed">

                
                <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 w-full">
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