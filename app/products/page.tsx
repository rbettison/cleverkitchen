import ProductCard from "../components/ProductCard";
import {getProducts} from "../server/ProductService"
import Link from "next/link";

export default async function Products() {
     let products = await getProducts(5);
     console.log(products)

    return (

        <div className="h-screen container col-span-5 bg-fixed">
            <h1 className="text-4xl text-primary-200 text-center pb-4 border-primary-100">Our Products</h1>
            <div className="h-96 bg-bottom bg-50% bg-no-repeat bg-cover" style={{ backgroundImage: `url('/AllProductsBackground.png')` }}>
                <div className="px-5 pt-80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 w-full">
                    {products.data.products.edges.map((edge: any) =>
                        <Link href={`/products/${edge.node.handle}`}>
                            <ProductCard key={edge.node.handle}
                             title={edge.node.title}
                             handle={edge.node.handle}
                              image={edge.node.images.edges[0] != null ?
                              edge.node.images.edges[0].node.url : ''}
                              price={edge.node.priceRange.maxVariantPrice.amount}
                              currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />
                        </Link>)}
                </div>
            </div>

        </div>
    )
}