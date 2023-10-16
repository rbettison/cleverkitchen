export default async function gqlQuery(query : string, variables: {}) {
    console.log('Performing query: ' + query);
    console.log('With variables: ' + JSON.stringify(variables));
    
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
    console.log(response);
    let respJson = await response.json();
    console.log('resp jsn: ' + respJson);
    console.log('resp.data: ' +  JSON.stringify(respJson.data));
    return respJson;

}