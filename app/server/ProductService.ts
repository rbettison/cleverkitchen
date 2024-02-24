import gqlQuery from "../lib/shopifyService";
import {ProductReviewSummary} from "@/app/types/productReviewSummary";
import {Review} from "@/app/types/review";

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

let productHandleQuery = `query SingleProductByHandle($handle: String!) {
  product(handle: $handle) {
    id
    title
    description
    descriptionHtml
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 5) {
      edges {
        node {
          id
          title
          availableForSale
        }
      }
    }
    images(first: 5) {
      edges {
        node {
          url
        }
      }
    }
    metafield(namespace: "product_meta_data", key: "ali_express_product_id") {
      key,
      value
    }
  }
}`;

export async function getReviewJson(aliExpressId) {
    const url = `https://feedback.aliexpress.com/pc/searchEvaluation.do?productId=${aliExpressId}&lang=en_US&country=UK&page=1&pageSize=10&filter=all&sort=complex_default`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return null;
    }
}

export function extractProductReviewSummaryFromJson(json: string): ProductReviewSummary {
    return json['productEvaluationStatistic'] as ProductReviewSummary;
}

export function extractReviewsFromJson(json: string): Review[] {
    return json['evaViewList'] as Review[]
}


export async function getProducts(numberOfProducts: number) {
    return await gqlQuery(query.replace("<<>>", numberOfProducts.toString()), {});
}

export async function getProductByHandle(productHandle: string) {
    try {
        let response = await gqlQuery(productHandleQuery, { handle: productHandle });

        if (response.data && response.data.product) {
            return response;
        } else {
            console.error('No product found for the given handle:', productHandle);
            return null;
        }
    } catch (error) {
        console.error('Error fetching product by handle:', error);
        throw error;
    }
}
