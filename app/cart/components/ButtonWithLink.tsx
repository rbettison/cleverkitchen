import Link from "next/link";
import {ReactNode} from "react";

interface ButtonWithLinkProps{
    children: ReactNode,
    btnLink: string
}
export default  function ButtonWithLink({children, btnLink}: ButtonWithLinkProps) {

    return(
    <Link href={btnLink}>
        <div className="mt-6">
            <div className="flex items-center justify-center
             rounded-md border border-transparent bg-indigo-600
              px-6 py-3 text-base font-medium text-white shadow-sm
               hover:bg-indigo-700">
                {children}
            </div>
        </div>
    </Link
    >)

}