export default async function gqlQuery(query : string, variables: {}) {


    console.log('query: ' + query );
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
    console.log('gql resp: ' + JSON.stringify(response))
    console.log('response status: ' + response.status);
    let respJson = await response.json();
    console.log('gql resp json: ' + JSON.stringify(respJson))
    return respJson;

}