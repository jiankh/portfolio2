import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import logoDetail from "../assets/17.png"


function NavBar() {
    const HoverUnderlineLink = ({ href, children }) => {
        return (
          <a
            href={href}
            className="relative text-black transition-colors duration-300 nav-link"
          >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
        );
      };

      const [hover,setHover] = useState(false)



    return (
        <motion.div className='font-mono flex justify-between py-5 px-24' initial={{y:"-20vh"}} animate={{y:"0"}} transition={{ duration: '1'}}> 
            <motion.div className="text-black font-bold text-3xl lowercase" onHoverStart={()=>setHover(true)} onHoverEnd={()=>setHover(false)}>
                <div className='relative cursor-pointer'> jeanh {hover && <img className='h-3.5 absolute top-0 left-1' src={logoDetail}/> } </div> 
            </motion.div>


            <div className=" justify-start items-start gap-[30px] inline-flex">
                <div className="justify-start items-start gap-[30px] flex">
                    <HoverUnderlineLink href={`#about`} children={`about`} />
                    <HoverUnderlineLink href={`#technology`} children={`technology`} />
                    <HoverUnderlineLink href={`#projects`} children={`projects`} />
                    <HoverUnderlineLink href={`#contact`} children={`contact`} />
                </div>
                
            </div>

        </motion.div>
    )
}

export default NavBar