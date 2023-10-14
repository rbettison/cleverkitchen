import storefrontClient from "./shopifyClient";

export default async function gqlQuery(query: string) {
    let resp = { body: ""};

    try {
        resp = await storefrontClient.query({
            data: query
         })
    } catch (err) {
        console.log(err);
        console.log(resp.body);
    }
    

    return resp.body;
}