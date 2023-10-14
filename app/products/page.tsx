import gqlQuery from "../lib/shopifyService";

export default async function Products() {
    let products = [];

    let query = `{
        products(first: 5) {
          edges {
              node {
                  title
              }
          }
        }
      }`
    // console.log(process.env.SHOPIFY_GRAPHQL);
    // if(process.env.SHOPIFY_GRAPHQL != undefined) {
    //     let variables= {};
    //     let response = await fetch(
    //         process.env.SHOPIFY_GRAPHQL,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
    //             },
    //             body: JSON.stringify({ query, variables })
    //         }
    //     );
    //     console.log(response);
    //     products = await response.json();
    //     console.log(products);
    // }

    products = await gqlQuery(query);

    

    return (
        <>
            <h1>All Products</h1>
            <h2>Here, you'll see lots of cool products.</h2>
            {products.data.products.edges.map((edge: any) => <h3 key={edge.node.handle}>{edge.node.title}</h3>)}
        </>
    )
}