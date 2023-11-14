import Link from "next/link";
import { getProducts } from "./server/ProductService";
import ProductCard from "./components/ProductCard";


export default async function Home() {

  let products = await getProducts(2);
  return (
    <>
    <div className='top-0 absolute min-w-full h-128 bg-hero-pattern bg-center -z-10'>
    </div>
    <div className="p-8 h-96 flex flex-col justify-center items-center text-center gap-8">
    <p className="text-4xl drop-shadow-lg bg-black text-white">The gadgets that your kitchen has been missing. Get ready to cook smarter.</p>
    <button className="p-4 bg-black text-white w-20 rounded-3xl"><Link href="/products">Shop</Link></button>
    </div>
    <div className="mt-24">
      <p className="text-center text-2xl text-black">Featured Products</p>
      <div className="flex sm:flex-row flex-col p-8 sm:p-0 justify-evenly">
        {products.data.products.edges.map((edge: any) => <ProductCard title={edge.node.title}
                                                                                  handle={edge.node.handle}
                                                                                  image={edge.node.images.edges[0] != null ?
                                                                                      edge.node.images.edges[0].node.url : ''}
                                                                                  price={edge.node.priceRange.maxVariantPrice.amount}
                                                                                  currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />)}
      </div>
    </div>
    </>
  )
}
