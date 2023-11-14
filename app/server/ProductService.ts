import gqlQuery from "../lib/shopifyService";

let query = `{
    products(first: <<>>) {
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

export async function getProducts(numberOfProducts: number) {
    return await gqlQuery(query.replace("<<>>", numberOfProducts.toString()), {});
}
