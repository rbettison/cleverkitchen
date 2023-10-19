import gqlQuery from "../lib/shopifyService";
import ProductCard from "../components/ProductCard";

export default async function Products() {

    let query = `{
        products(first: 5) {
          edges {
              node {
                  title,
                  handle,
                  priceRange {
                    maxVariantPrice {
                      amount, 
                      currencyCode
                    }
                  },
                  images(first: 1) {
                    edges {
                        node {
                        url
                        }
                    }
                  }
              }
          }
        }
      }`
     let products = await gqlQuery(query, {});
    

    return (
        <div className="container p-8 col-span-5">
            <h1 className="text-4xl text-primary-200 pb-4 border-b border-primary-100">Our Products</h1>
            <h2 className="text-6xl text-primary-200 pb-10 pt-10 italic">Carefully curated to make your kitchen more clever.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 shadow-md p-5 w-full bg-gray-100">
            {products.data.products.edges.map((edge: any) => <ProductCard title={edge.node.title} 
                                                                            handle={edge.node.handle}
                                                                            image={edge.node.images.edges[0] != null ?
                                                                                    edge.node.images.edges[0].node.url : ''}
                                                                            price={edge.node.priceRange.maxVariantPrice.amount}
                                                                            currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />)}
            </div>
        </div>
    )
}