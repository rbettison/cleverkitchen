import Link from "next/link";

const currencies = {
    'GBP': '£'
}


export default function ProductCard(props: {handle: string, title: string, image: string, price: number, currencyCode: string}) {
    let imageUrl = props.image;
    return (
        <div className="box-border overflow-hidden shadow-sm hover:shadow-lg">
                <div className="bg-white h-full flex flex-col">
                    
                    <img src={imageUrl} className="py-4 w-full h-40 min-h-32 object-cover"/>
                    <div className="p-4 flex flex-col justify-between h-full items-center">
                        <span className="text-secondary-200 text-l font-light text-center" key={props.handle}>{props.title}</span>
                        <span className="text-secondary-200 block font-light">{currencies.GBP + props.price}</span>
                        <span className="bg-primary-100 p-1 rounded-full text-white text-sm mt-3 hover:bg-white hover:text-primary-200 border"><Link href={`/products/${props.handle}`}>Buy Now</Link></span>
                    </div>
                    
                </div>
            
        </div>

    )
}