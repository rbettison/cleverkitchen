import AddToCart from "@/app/cart/components/AddToCart";
import {getProductByHandle, getProducts} from "@/app/server/ProductService";
import ProductCard from "@/app/components/ProductCard";
import ButtonWithLink from "@/app/cart/components/ButtonWithLink";
import Link from "next/link";


export default async function Product({params} : 
    { params: { id: string } }) {

    let products = await getProducts(2);
    let product = await getProductByHandle(params.id);
    console.log(product.data.product.variants)
    let images : string[] = product.data.product.images.edges.map((edge: {node: { url : string}}) => edge.node.url);

    return (
        <>
            <div>
                <div className={"container p-8 flex justify-around flex-col md:flex-row"} id={'product pic and description row'}>
                    <div className={""}>
                        {/*<img src={product.data.product.images.edges[0] != null ?*/}
                        {/*    product.data.product.images.edges[0].node.url : ''} className="py-4 w-full h-40 min-h-32 object-cover"/>*/}

                        <ProductCard key={params.id} title={product.data.product.title}
                                     handle={params.id}
                                     image={product.data.product.images.edges[0] != null ?
                                         product.data.product.images.edges[0].node.url : ''}
                                     price={product.data.product.priceRange.maxVariantPrice.amount}
                                     currencyCode={product.data.product.priceRange.maxVariantPrice.currencyCode} />
                    </div>
                    <div className={"flex flex-col"}>
                        <div>{product.data.product.title}</div>
                        <div>description</div>
                        <AddToCart product={{ title: product.data.product.title,
                            handle: params.id,
                            variantId: product.data.product.variants.edges[0].node.id,
                            image: product.data.product.images.edges[0]?.node.url || "",
                            price: product.data.product.priceRange.maxVariantPrice.amount,
                            quantity: 1}}/>
                        <ButtonWithLink btnLink={'/cart'} >
                            Go To Cart
                        </ButtonWithLink>
                    </div>
                </div>
                <p className="text-center text-2xl text-black">Related Products</p>
                <div className="container p-8 flex justify-around flex-col md:flex-row">
                    {products.data.products.edges.map((edge: any) => <ProductCard key={edge.node.handle} title={edge.node.title}
                                                                                  handle={edge.node.handle}
                                                                                  image={edge.node.images.edges[0] != null ?
                                                                                      edge.node.images.edges[0].node.url : ''}
                                                                                  price={edge.node.priceRange.maxVariantPrice.amount}
                                                                                  currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />)}
                </div>
            </div>
        </>

    )
}