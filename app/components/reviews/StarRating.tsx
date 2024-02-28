export default function StarRating({rating}: {rating: number}) {


    let percentRating = rating / 5 * 100;
    if(percentRating > 100) percentRating = rating;

    return (
        <>
        <svg className="hidden">
            <symbol id="star" width="32" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.77 11.857H19.74L15.99.5l-3.782 11.357H0l9.885 6.903-3.692 11.21 9.736-7.05 9.796 6.962-3.722-11.18 9.766-6.845z" fill="currentColor"/></symbol>
        </svg>
        <div className="relative inline-block max-w-[178px]">
            <div className="text-gray-200 inline-flex space-x-1">
                <svg viewBox="0 0 32 30" className="w-8 h-8">
                    <use xlinkHref="#star"></use>
                </svg>
                <svg viewBox="0 0 32 30" className="w-8 h-8">
                    <use xlinkHref="#star"></use>
                </svg>
                <svg viewBox="0 0 32 30" className="w-8 h-8">  
                    <use xlinkHref="#star"></use>
                </svg>    
                <svg viewBox="0 0 32 30" className="w-8 h-8">
                    <use xlinkHref="#star"></use>
                </svg>    
                <svg viewBox="0 0 32 30" className="w-8 h-8">
                    <use xlinkHref="#star"></use>
                </svg>    
            </div>
            <div className={`overflow-hidden absolute left-0 top-0 text-yellow-400 flex space-x-1`} style={{width: `${percentRating}%`}}>
                <svg viewBox="0 0 32 30" className="w-8 h-8 flex-shrink-0">
                    <use xlinkHref="#star"></use>
                </svg>
                <svg viewBox="0 0 32 30" className="w-8 h-8 flex-shrink-0	">
                    <use xlinkHref="#star"></use>
                </svg>
                <svg viewBox="0 0 32 30" className="w-8 h-8 flex-shrink-0	">  
                    <use xlinkHref="#star"></use>
                </svg>    
                <svg viewBox="0 0 32 30" className="w-8 h-8 flex-shrink-0	">
                    <use xlinkHref="#star"></use>
                </svg>    
                <svg viewBox="0 0 32 30" className="w-8 h-8 flex-shrink-0	">
                    <use xlinkHref="#star"></use>
                </svg>    
            </div>        
        </div>
    </>
    )
}