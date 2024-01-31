'use client'

import { motion } from "framer-motion"

export default function HowTo() {
    return (
        <motion.div 
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y:0}}
            viewport={{ once: true , amount: 0.5}}

            className="flex sm:flex-row flex-col w-4/5 justify-evenly gap-8 m-auto text-center sm:text-left">
            <div>
                <p className="font-light text-[36px]">HOW TO USE OUR <span className="font-bold">CLEVER KITCHEN</span> GADGETS</p>
                <p className="font-light text-[24px]">Whether you&apos;re a novice or a seasoned chef, our tiktok video tutorials are here to elevate your cooking game</p>                                                                        
            </div>
            <div className="sm:h-[300px] h-[200px] w-[300px] sm:w-[700px] border border-borderVideo-100 rounded-lg bg-video-image bg-cover">
                                                                                    
            </div>
        </motion.div>
    )
}