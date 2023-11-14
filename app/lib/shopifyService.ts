export default async function gqlQuery(query : string, variables: {}) {
    
    let response = await fetch(
        process.env.SHOPIFY_GRAPHQL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
            },
            body: JSON.stringify({ query, variables }),
            cache: "no-store"
        }
    );
    let respJson = await response.json();
    return respJson;

}