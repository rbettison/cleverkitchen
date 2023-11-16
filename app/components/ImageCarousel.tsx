"use client";
import { useState } from "react";

export default function ImageCarousel(props: {images: string[]}) {

    const [mainImage, setMainImage] = useState(props.images[0])

    async function handleImageClick(image: string) {
        setMainImage(image);
    }

    return (
        <>
            <div className="flex flex-col">
                <img src={mainImage}  className="w-full h-96 min-h-32 object-cover"/>
                <div className="bg-white h-full flex flex-row">
                {props.images.map((image) =>    <button key={image} value={image} onClick={()=>handleImageClick(image)}>
                                                    <img src={image} className="w-full h-40 min-h-32 object-cover"/>
                                                </button>)}
                </div>
            </div>
        </>
    )
}