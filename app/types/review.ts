export interface Review {
    anonymous: boolean;
    buyerAddFbContent: string;
    buyerAddFbDate: string;
    buyerAddFbDays: number;
    buyerAddFbImages: string[];
    buyerAddFbThumbnails: string[];
    buyerAddFbTranslation: string;
    buyerCountry: string;
    buyerEval: number;
    buyerFeedback: string;
    buyerHeadPortrait: string;
    buyerName: string;
    buyerProductFeedBack: string;
    buyerTranslationFeedback: string;
    downVoteCount: number;
    evalDate: string;
    evaluationId: number;
    evaluationIdStr: string;
    images: string[];
    logistics: string;
    skuInfo: string;
    status: string;
    thumbnails: string[];
    upVoteCount: number;
}