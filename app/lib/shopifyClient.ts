import '@shopify/shopify-api/adapters/node';
import { ApiVersion, shopifyApi } from '@shopify/shopify-api';


const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
    adminApiAccessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    isCustomStoreApp: true,
    scopes: ['read_products'],
    hostName: process.env.SHOPIFY_SHOP,
    apiVersion: ApiVersion.October23,
    isEmbeddedApp: false,
    privateAppStorefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  });

const session = shopify.session.customAppSession(process.env.SHOPIFY_SHOP);

const storefrontClient = new shopify.clients.Storefront({session, apiVersion: ApiVersion.October23});

export default storefrontClient;