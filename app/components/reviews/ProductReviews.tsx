'use client';
import { useState } from "react";
import { ProductReviewSummary } from "../../types/productReviewSummary";
import { Review } from "../../types/review";
import ReviewEntry from "./ReviewEntry";
import StarRating from "./StarRating";

export default function ProductReviews({productReviewSummary, reviews}: 
        {productReviewSummary: ProductReviewSummary, reviews: Review[]}) {

    const [numberReviews, setNumberReviews] = useState<number>(3);
    const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews.slice(0, numberReviews));

    const increaseReviews = () => {
        if(numberReviews < reviews.length) {
            let newReviewNumber = numberReviews + 3;
            setNumberReviews(newReviewNumber)
            setFilteredReviews(reviews.slice(0, newReviewNumber))
        }
    }

    const decreaseReviews = () => {
        if(numberReviews > 3) {
            let newReviewNumber = numberReviews - 3;
            setFilteredReviews(reviews.slice(0, newReviewNumber))
            setNumberReviews(newReviewNumber) 
        }
    }
        
    return (
        <div className={"flex flex-col mb-8 border-y-2 border-y-inherit sm:p-4 p-2 sm:w-3/4 w-4/5 m-auto"}>
            <div className="mb-4 flex flex-col justify-center items-center">
                <div className={"sm:text-4xl pb-3 sm:font-bold text-2xl font-normal"}>Customer Reviews</div>
                <StarRating rating={productReviewSummary?.evarageStar} />
                <div className={"sm:text-2xl sm:font-bold font-normal text-xl"}>
                    Average Rating: {productReviewSummary?.evarageStar} ({productReviewSummary?.totalNum} reviews)
                </div>
                <div>5 star ratings {productReviewSummary.fiveStarNum} </div>
                <div>4 star ratings {productReviewSummary.fourStarNum} </div>
                <div>3 star ratings {productReviewSummary.threeStarNum} </div>
                <div>2 star ratings {productReviewSummary.twoStarNum}</div>
                <div>1 star ratings {productReviewSummary.oneStarNum}</div>
            </div>
            <ol className="flex flex-col sm:gap-2 gap-4">
                {filteredReviews.map((r, index) => {
                    return ( 
                        <ReviewEntry key={r.evaluationId} hidden={false} r={r}/>
                    )
                })
                }
            </ol>

            <div className="flex flex-row gap-2 mt-4 font-bold">
                <button className={`${numberReviews <= reviews.length ? "" : "text-opacity-50"} text-slate-700`} onClick={increaseReviews}>
                    More reviews
                </button>
                <button className={`${numberReviews !== 3 ? "" : "text-opacity-5"} text-slate-700`} onClick={decreaseReviews}>
                    Less reviews
                </button>
            </div>
        </div>
    )
}