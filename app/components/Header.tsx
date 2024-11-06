'use client'

import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image 
        src={"/hero2.png"} 
        alt="hero2" 
        width={1000} 
        height={500} 
        unoptimized
        className="w-full h-auto object-contain object-center bg-primary-gradient" 
      />
      <div className="bg-primary-gradient w-full h-screen absolute top-0"></div>
      <div className="relative bg-center">
        <div className="!flex justify-between max-w-screen-2xl mx-auto p-4 bg-green-200 top-0 fixed w-full">
          <p className="text-4xl">LOGO</p>

          <div className="flex gap-6 items-center">
            <p>hello</p>
            <p>helloworld</p>
            <p>hellokoko</p>
            <p>123</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;