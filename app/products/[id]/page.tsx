import AddToCart from "@/app/cart/components/AddToCart";
import {getProductByHandle, getProducts} from "@/app/server/ProductService";
import ProductCard from "@/app/components/ProductCard";
import ButtonWithLink from "@/app/cart/components/ButtonWithLink";
import ImageCarousel from "@/app/components/ImageCarousel";


export default async function Product({params} : 
    { params: { id: string } }) {

    let products = await getProducts(2);
    let product = await getProductByHandle(params.id);
    let variants = product.data.product.variants.edges;
    let images : string[] = product.data.product.images.edges.map((edge: {node: { url : string}}) => edge.node.url);

    return (
        <>
            <div>
                <div className={"container p-8 flex justify-around flex-col gap-8 md:flex-row"} id={'product pic and description row'}>
                    <div className={"w-1/2"}>
                        <ImageCarousel images={images} />
                    </div>
                    <div className={"flex flex-col w-1/2"}>
                        <div className={"text-4xl pb-3"}>{product.data.product.title}</div>
                        <div dangerouslySetInnerHTML={{__html: product.data.product.descriptionHtml}}></div>
                        <AddToCart
                            product={{ title: product.data.product.title,
                            handle: params.id,
                            variantId: variants[0].id,
                            variantTitle: variants[0].title,
                            image: product.data.product.images.edges[0]?.node.url || "",
                            price: product.data.product.priceRange.maxVariantPrice.amount,
                            quantity: 1}}
                            variants={variants}
                        />
                        <ButtonWithLink btnLink={'/cart'}>
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