import AddToCart from "@/app/cart/components/AddToCart";
import {
    extractProductReviewSummaryFromJson, extractReviewsFromJson,
    getProductByHandle,
    getProducts,
    getReviewJson
} from "@/app/server/ProductService";
import ProductCard from "@/app/components/ProductCard";
import ImageCarousel from "@/app/components/ImageCarousel";
import styles from "./page.module.css"
import {ProductReviewSummary} from "@/app/types/productReviewSummary";
import {Review} from "@/app/types/review";

export default async function Product({params} : 
    { params: { id: string } }) {

    let products = await getProducts(2);
    let product = await getProductByHandle(params.id);
    let reviewJson = await getReviewJson(product.data.product.metafield.value)
    let productReviewSummary: ProductReviewSummary = extractProductReviewSummaryFromJson(await reviewJson);
    let reviews: Review[] = extractReviewsFromJson(await reviewJson);
    let variants = product.data.product.variants.edges;
    let images : string[] = product.data.product.images.edges.map((edge: {node: { url : string}}) => edge.node.url);

    return (
        <>
            <div className="mb-52">
                <div className={"container mt-40 sm:mt-24 mb-40 p-8 flex justify-around align-middle flex-col gap-8 md:flex-row"} id={'product pic and description row'}>
                    <div className={"md:w-1/2"}>
                        <ImageCarousel images={images} />
                        <div className={"pt-5"}>
                            <AddToCart
                                product={{ title: product.data.product.title,
                                    handle: params.id,
                                    variantId: variants[0].id,
                                    variantTitle: variants[0].title,
                                    image: product.data.product.images.edges[0]?.node.url || "",
                                    price: product.data.product.priceRange.maxVariantPrice.amount,
                                    description: product.data.product.description,
                                    quantity: 1}}
                                variants={variants}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col md:w-1/2"}>
                        <div className={"text-4xl pb-3"}>{product.data.product.title}</div>
                        <div id={styles.id_description} dangerouslySetInnerHTML={{__html: product.data.product.descriptionHtml}}></div>

                    </div>
                    <div className={"flex flex-col md:w-1/2"}>
                        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                        <p>Average Rating: {productReviewSummary?.evarageStar} ({productReviewSummary?.totalNum} reviews)</p>
                        <ol>
                            {reviews.map((r) => (
                                <li key={r.evaluationId} className={"list-disc space-y-2"}>
                                    <p>{r.buyerTranslationFeedback}</p>

                                    {r.images && r.images.length > 0 && <ImageCarousel images={r.images} />}
                                    <div className="text-sm text-gray-600">Reviewed on {r.evalDate}</div>
                                </li>
                            ))}
                        </ol>
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