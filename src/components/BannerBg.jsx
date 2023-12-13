import React from 'react'
import background from  '../assets/Rectangle.png'
import { motion } from 'framer-motion';

function BannerBg() {
  return (
    
    <div className="absolute flex justify-center w-full z-[-1]"> 

        <motion.img 
            initial={{scale: 1.5, opacity:1, zIndex: 3}}
            animate={{scale: 1, opacity: 0.5, zIndex: -1}}
            transition={{duration: 1, ease: "easeInOut"}}
            className='opacity-50' src={background} 
        />

    </div>
  )
}

export default BannerBg