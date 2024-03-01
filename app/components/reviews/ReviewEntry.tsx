import ImageCarousel from "./../ImageCarousel";
import { Review } from "../../types/review";
import StarRating from "./StarRating";

export default function ReviewEntry({r, hidden}: {r: Review, hidden: boolean}) {
    return (
        <li key={r.evaluationId} className={`${hidden ? "hidden" : ""} sm:p-5 p-0 `}>
            <StarRating rating={r.buyerEval}/>
            <div>{r.buyerName} - <span className="text-sm text-gray-600">{r.evalDate}</span></div>
            <div className="flex flex-row flex-wrap gap-2 py-3">
                {r.images && r.images.length > 0 && 
                    r.images.map((r) => {
                        return <img key={r} className="w-24 h-24 bg-cover" src={r} />
                    })}
            </div>
            <p className="text-xl">{r.buyerTranslationFeedback}</p>
        </li>
    )
}