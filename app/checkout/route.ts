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

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const variantId = searchParams.get('variantId');

    console.log('Checking out with: ' + variantId);
    let json = await gqlQuery(checkoutMutation, {'variantId': variantId})

    return NextResponse.json(json);

} 