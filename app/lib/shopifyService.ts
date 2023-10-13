import storefrontClient from "./shopifyClient";

export default async function gqlQuery(query: string) {
    let resp = await storefrontClient.query({
       data: query
    })

    return resp.body;
}