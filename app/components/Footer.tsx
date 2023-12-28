import Link from "next/link"

export default function Footer() {
    return(
        <>
        <div className="p-8 h-screen sm:h-auto text-white bg-darkGrey-100">
            <div className="flex flex-col items-center sm:flex-row gap-8 sm:gap-0 justify-evenly sm:justify-between border-b border-white pb-12 text-center h-4/5">
                <div className="sm:text-left flex flex-col text-4xl">
                    CLEVER KITCHEN
                    
                    
                </div>
                <div className="sm:text-right text-sm flex flex-row gap-4">
                   <p>Follow us on</p> 
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                        <g id="ic:baseline-tiktok">
                            <path id="Vector" d="M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5315 17.8999 9.86003 17.9C8.44003 17.9 7.26003 16.74 7.26003 15.3C7.26003 13.58 8.92003 12.29 10.63 12.82V9.66C7.18003 9.2 4.16003 11.88 4.16003 15.3C4.16003 18.63 6.92003 21 9.85003 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z" fill="#F8F8F8"/>
                        </g>
                    </svg>

                </div>
            </div>
            <div className="w-full text-xs p-8 flex flex-row justify-around">
                <p>Bettison Bros. Ltd. All rights reserved.</p>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/returns">Shipping & Returns Policy</Link>
            </div>
            </div>
        </>
    )
}

{/* <p>Bettison Bros. Ltd</p>
<p>71-75 Shelton Street</p>
<p>London</p>
<p>WC2H 9JQ</p>
<p className="underline">bettisonltd@gmail.com</p>

 */}