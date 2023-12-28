import Link from "next/link";

const currencies = {
    'GBP': '£'
}


export default function ProductCard(props: {handle: string, title: string, image: string, price: number, currencyCode: string}) {
    let imageUrl = props.image;
    return (
        <Link href={`/products/${props.handle}`} className="box-border overflow-hidden shadow-sm hover:shadow-lg rounded-lg border border-border-100">
                <div className="bg-white h-full flex flex-col ">
                    
                    <img src={imageUrl} className="py-4 w-full h-40 min-h-32 object-cover"/>
                    <div className="p-4 flex flex-col justify-between h-full items-center border-t border-border-100">
                        <span className="text-l font-light text-center text-[20px]" key={props.handle}>{props.title}</span>
                        <span className="block font-light text-[24px] text-price-100">{currencies.GBP + props.price}</span>
                    </div>
                    
                </div>
            
        </Link>

    )
}