import Link from "next/link";
import { getProducts } from "./server/ProductService";
import ProductCard from "./components/ProductCard";


export default async function Home() {

  let products = await getProducts(6);
  return (
    <>
    
    <div className="w-full gap-8 mb-48 sm:h-screen sm:grid flex flex-col items-center sm:text-left text-center grid-cols-4 grid-rows-5 justify-between">
      <p className="sm:text-[84px] text-4xl leading-tight font-light sm:pl-24 row-start-2 col-span-2">Effortless cooking, <span className="whitespace-nowrap">with <span className="font-bold">clever kitchen</span></span> solutions</p>
      <div className='sm:top-0 sm:left-0 top-0 left-0 sm:absolute sm:min-w-full sm:h-screen w-screen h-[200px] bg-hero-pattern bg-contain bg-no-repeat sm:bg-cover -z-10 overflow-auto'>
      </div>
      <p className="sm:text-[24px] text-xl font-light row-start-4 col-span-2 sm:pl-24">From time-saving marvels to space-efficient solutions, revolutionize the way you cook with clever kitchen gadgets.</p>
    </div>
    <div className="sm:h-screen h-auto flex flex-col items-center text-center">
      <div className="font-light text-[36px]">
        Not sure what you are looking for?
      </div>
      <div className="font-bold text-[36px]">
        Check out our tailored recommendations
      </div>
      <div className="sm:grid flex flex-col grid-rows-2 grid-cols-3 p-8 w-full gap-8">
        {products.data.products.edges.map((edge: any) => <ProductCard key={edge.node.handle} title={edge.node.title}
                                                                                  handle={edge.node.handle}
                                                                                  image={edge.node.images.edges[0] != null ?
                                                                                      edge.node.images.edges[0].node.url : ''}
                                                                                  price={edge.node.priceRange.maxVariantPrice.amount}
                                                                                  currencyCode={edge.node.priceRange.maxVariantPrice.currencyCode} />)}
      </div>

    </div>

    <div className="flex sm:flex-row flex-col w-4/5 justify-evenly gap-8 m-auto text-center sm:text-left">
          <div>
            <p className="font-light text-[36px]">HOW TO USE OUR <span className="font-bold">CLEVER KITCHEN</span> GADGETS</p>
            <p className="font-light text-[24px]">Whether you&apos;re a novice or a seasoned chef, our tiktok video tutorials are here to elevate your cooking game</p>                                                                        
          </div>
          <div className="sm:h-[300px] h-[200px] w-[300px] sm:w-[700px] border border-borderVideo-100 rounded-lg bg-video-image bg-cover">
                                                                                  
          </div>
    </div>

    <div className="flex sm:flex-row flex-col justify-center gap-12 my-24">
      <div className="flex flex-col items-center">
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.12 25.8399C11.6222 25.8399 12.84 24.6222 12.84 23.1199C12.84 21.6176 11.6222 20.3999 10.12 20.3999C8.61778 20.3999 7.39999 21.6176 7.39999 23.1199C7.39999 24.6222 8.61778 25.8399 10.12 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.72 25.8399C25.2223 25.8399 26.44 24.6222 26.44 23.1199C26.44 21.6176 25.2223 20.3999 23.72 20.3999C22.2177 20.3999 21 21.6176 21 23.1199C21 24.6222 22.2177 25.8399 23.72 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.64 23.1199V8.97591C19.64 8.52525 19.2747 8.15991 18.824 8.15991H4.13601C3.68534 8.15991 3.32001 8.52525 3.32001 8.97591V22.3039C3.32001 22.7546 3.68534 23.1199 4.13601 23.1199H6.92401" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H12.9081" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 12.24H27.2698C27.5922 12.24 27.8845 12.4299 28.0154 12.7246L30.4497 18.2017C30.4961 18.3061 30.52 18.419 30.52 18.5331V22.304C30.52 22.7547 30.1547 23.12 29.704 23.12H27.12" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H21" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
        </svg>
        <div>Free delivery</div>
      </div>                                                                            
      <div className="flex flex-col items-center">
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.12 25.8399C11.6222 25.8399 12.84 24.6222 12.84 23.1199C12.84 21.6176 11.6222 20.3999 10.12 20.3999C8.61778 20.3999 7.39999 21.6176 7.39999 23.1199C7.39999 24.6222 8.61778 25.8399 10.12 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.72 25.8399C25.2223 25.8399 26.44 24.6222 26.44 23.1199C26.44 21.6176 25.2223 20.3999 23.72 20.3999C22.2177 20.3999 21 21.6176 21 23.1199C21 24.6222 22.2177 25.8399 23.72 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.64 23.1199V8.97591C19.64 8.52525 19.2747 8.15991 18.824 8.15991H4.13601C3.68534 8.15991 3.32001 8.52525 3.32001 8.97591V22.3039C3.32001 22.7546 3.68534 23.1199 4.13601 23.1199H6.92401" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H12.9081" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 12.24H27.2698C27.5922 12.24 27.8845 12.4299 28.0154 12.7246L30.4497 18.2017C30.4961 18.3061 30.52 18.419 30.52 18.5331V22.304C30.52 22.7547 30.1547 23.12 29.704 23.12H27.12" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H21" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
        </svg>
        <div>Free delivery</div>
      </div> 
      <div className="flex flex-col items-center">
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.12 25.8399C11.6222 25.8399 12.84 24.6222 12.84 23.1199C12.84 21.6176 11.6222 20.3999 10.12 20.3999C8.61778 20.3999 7.39999 21.6176 7.39999 23.1199C7.39999 24.6222 8.61778 25.8399 10.12 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.72 25.8399C25.2223 25.8399 26.44 24.6222 26.44 23.1199C26.44 21.6176 25.2223 20.3999 23.72 20.3999C22.2177 20.3999 21 21.6176 21 23.1199C21 24.6222 22.2177 25.8399 23.72 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.64 23.1199V8.97591C19.64 8.52525 19.2747 8.15991 18.824 8.15991H4.13601C3.68534 8.15991 3.32001 8.52525 3.32001 8.97591V22.3039C3.32001 22.7546 3.68534 23.1199 4.13601 23.1199H6.92401" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H12.9081" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 12.24H27.2698C27.5922 12.24 27.8845 12.4299 28.0154 12.7246L30.4497 18.2017C30.4961 18.3061 30.52 18.419 30.52 18.5331V22.304C30.52 22.7547 30.1547 23.12 29.704 23.12H27.12" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H21" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
        </svg>
        <div>Free delivery</div>
      </div> 
      <div className="flex flex-col items-center">
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.12 25.8399C11.6222 25.8399 12.84 24.6222 12.84 23.1199C12.84 21.6176 11.6222 20.3999 10.12 20.3999C8.61778 20.3999 7.39999 21.6176 7.39999 23.1199C7.39999 24.6222 8.61778 25.8399 10.12 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.72 25.8399C25.2223 25.8399 26.44 24.6222 26.44 23.1199C26.44 21.6176 25.2223 20.3999 23.72 20.3999C22.2177 20.3999 21 21.6176 21 23.1199C21 24.6222 22.2177 25.8399 23.72 25.8399Z" stroke="#363636" strokeWidth="2.04" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.64 23.1199V8.97591C19.64 8.52525 19.2747 8.15991 18.824 8.15991H4.13601C3.68534 8.15991 3.32001 8.52525 3.32001 8.97591V22.3039C3.32001 22.7546 3.68534 23.1199 4.13601 23.1199H6.92401" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H12.9081" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 12.24H27.2698C27.5922 12.24 27.8845 12.4299 28.0154 12.7246L30.4497 18.2017C30.4961 18.3061 30.52 18.419 30.52 18.5331V22.304C30.52 22.7547 30.1547 23.12 29.704 23.12H27.12" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
          <path d="M19.64 23.1201H21" stroke="#363636" strokeWidth="2.04" strokeLinecap="round"/>
        </svg>
        <div>Free delivery</div>
      </div> 
    </div>





      

    </>
  )
}
