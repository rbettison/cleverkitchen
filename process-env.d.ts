declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SHOPIFY_GRAPHQL: string
        SHOPIFY_SHOP: string
        SHOPIFY_STOREFRONT_ACCESS_TOKEN: string
        SHOPIFY_API_KEY: string
        SHOPIFY_API_SECRET_KEY: string
        SHOPIFY_ADMIN_API_ACCESS_TOKEN: string
        BASE_URL: string
      }
    }
  }

  export {}