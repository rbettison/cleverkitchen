import { ProductReviewSummary } from "../types/productReviewSummary";
import { Review } from "../types/review";
import ReviewEntry from "./ReviewEntry";

export default function ProductReviews({productReviewSummary, reviews}: 
        {productReviewSummary: ProductReviewSummary, reviews: Review[]}) {

    return (
        <div className={"flex flex-col md:w-1/2"}>
            <div className={"text-4xl pb-3"}>Customer Reviews</div>
            <h2 className={"pb-3"}>
                {/*@ts-ignore*/}
                Average Rating: {productReviewSummary?.evarageStar} ({productReviewSummary?.totalNum} reviews)</h2>
            <ol>
                {reviews.map(r => <ReviewEntry r={r}/>)}
            </ol>
        </div>
    )
}