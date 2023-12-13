import React from 'react'
import background from  '../assets/rectangle1.png'

function BannerBg() {
  return (
    
    <div className="flex flex-col justify-between gap-40 w-4/5 self-center mx-auto h-80vh  z-0 animate-shrinkingBackground font-mono"
                style= {{ backgroundImage: `url(${background})`,
                          opacity: 0.8,
                }} 
    ></div>
  )
}

export default BannerBg