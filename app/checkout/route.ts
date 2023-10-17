import { NextRequest, NextResponse } from "next/server";
import gqlQuery from "../lib/shopifyService";


let checkoutMutation = `mutation CheckoutCreate($variantId: ID!) {
  checkoutCreate(input: {
    lineItems: {
        variantId: $variantId,
      quantity: 1
    }
  }) {
    checkout {
      webUrl
    }
  }
}`;

let multipleCheckoutMutation = `mutation CheckoutCreateMultiple {
  checkoutCreate(input: {
    lineItems: ****
  }) {
    checkout {
      webUrl
    }
  }
}`;

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const variantId = searchParams.get('variantId');

    console.log('Checking out with: ' + variantId);
    let json = await gqlQuery(checkoutMutation, {'variantId': variantId})

    return NextResponse.json(json);

}

export async function POST(request: NextRequest) {

  let reqJson = await request.json();

  console.log('reqJson:' + JSON.stringify(reqJson));
  let varString = `[`
  reqJson.variants.forEach((variant: string) => {

    varString = varString + `{
      variantId: "${variant}",
      quantity: 1
    },`
  })
  varString = varString + ']'
  let checkout = multipleCheckoutMutation.replace("****", varString);

  let json = await gqlQuery(checkout, {});

  return NextResponse.json(json);
}