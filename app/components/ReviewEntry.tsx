import ImageCarousel from "./ImageCarousel";
import { Review } from "../types/review";

export default function ReviewEntry({r}: {r: Review}) {
    return (
        <li key={r.evaluationId} className={"list-disc space-y-2"}>
            <p>{r.buyerTranslationFeedback}</p>
            {r.images && r.images.length > 0 && <ImageCarousel images={r.images}/>}
            <div className="text-sm text-gray-600">Reviewed on {r.evalDate}</div>
        </li>
    )
}