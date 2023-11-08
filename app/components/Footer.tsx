import Link from "next/link"

export default function Footer() {
    return(
        <>
        <div className="p-8 h-screen sm:h-auto">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-evenly sm:justify-between border-b-2 border-primary-100 pb-4 text-center h-4/5">
                <div className="sm:text-left flex flex-col underline text-sm">
                    <Link href="/terms">Terms & Conditions</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/returns">Shipping & Returns Policy</Link>
                    
                </div>
                <div className="sm:text-right text-sm">
                    <p>Bettison Bros. Ltd</p>
                    <p>71-75 Shelton Street</p>
                    <p>London</p>
                    <p>WC2H 9JQ</p>
                    <p className="underline">bettisonltd@gmail.com</p>
                </div>
            </div>
            <div className="w-full">
                Bettison Bros. Ltd. Copyright - all rights reserved.
            </div>
            </div>
        </>
    )
}