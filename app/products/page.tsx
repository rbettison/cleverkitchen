import gqlQuery from "../lib/shopifyService";

export default async function Products() {

    let query = `{
        products(first: 5) {
          edges {
              node {
                  title
              }
          }
        }
      }`
     let products = await gqlQuery(query, {});

    

    return (
        <>
            <h1>All Products</h1>
            <h2>Here, you'll see lots of cool products.</h2>
            {products.data.products.edges.map((edge: any) => <h3 key={edge.node.handle}>{edge.node.title}</h3>)}
        </>
    )
}