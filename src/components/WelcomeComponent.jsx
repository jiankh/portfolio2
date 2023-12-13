import { useEffect } from 'react'
import React from 'react'
import BannerBg from './BannerBg'
import ParallaxText  from './ParallaxText'
import { motion } from 'framer-motion';


function WelcomeComponent() {
    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y:20,
        },
        visible: {
            opacity:1,
            y:0,
        }
    }

    const name = ["I","'","M",'\u00A0' ,"J","E","A","N"]

    return (
        

        <div>
            <BannerBg />

            <div className='grid grid-rows-3 h-90vh'>
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    transition={{staggerChildren: 0.1, delayChildren: 2}}
                    aria-hidden
                    className=" text-black text-[100px] font-normal uppercase m-auto pr-48 z-2">
                        {"Welcome, \u00A0 and".split("").map((char) => (
                            <motion.span  className='inline-block' variants={defaultAnimations}>{char}</motion.span>
                        ))}
                </motion.div>

                <ParallaxText />

                <motion.div 
                     initial="hidden"
                     animate="visible"
                     transition={{staggerChildren: 0.1, delayChildren: 2}}
                     aria-hidden
                    className=" text-black text-[100px] font-normal uppercase m-auto pl-48 z-2" >
                        {"I'M \u00A0 Jean \u00A0 Huang".split("").map((char) => (
                            <motion.span  className='inline-block' variants={defaultAnimations}>{char}</motion.span>
                        ))}
                </motion.div>

            </div>
        

            


            
            


        </div>
    )
}

export default WelcomeComponent