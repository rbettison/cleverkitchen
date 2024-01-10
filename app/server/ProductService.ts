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

let productHandleQuery = `query SingleProduct($handle: String!) {
  product(handle : $handle) {
    title,
    description,
    descriptionHtml,
    priceRange {
      maxVariantPrice {
        amount, 
        currencyCode
      }
    },
    variants(first: 5) {
      edges {
        node {
          id,
          title
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

export async function getProducts(numberOfProducts: number) {
    return await gqlQuery(query.replace("<<>>", numberOfProducts.toString()), {});
}

export async function getProductByHandle(productHandle: string) {
  let result = await gqlQuery(productHandleQuery, {handle: productHandle});
  return result;
}