'use client'

import { Button } from "@/components/ui/button";
import { PlayIcon, StarIcon } from "@radix-ui/react-icons"
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div 
      className="
        flex 
        justify-center 
        items-center 
        absolute 
        !top-[380px] 
        left-0 
        w-full 
        transform 
        -translate-y-1/2
      "
    >
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4">
        {/* Text Content */}
        <div className="max-w-[440px]">
          <p className="text-4xl font-bold text-[#FEF3E2]">Furiosa: A Mad Max Saga</p>
          <p className="text-slate-300 mt-2">
            In "Furiosa: A Mad Max Saga," the fierce warrior Furiosa embarks on a perilous journey through a 
            post-apocalyptic wasteland, battling ruthless enemies to reclaim her homeland.
          </p>

          <Button 
            className="
              bg-[#FA4032] 
              hover:bg-[#FA4032]/40 
              text-base 
              py-1 
              px-8 
              mt-10
            "
          >
            Watch
          </Button>
        </div>

        {/* Featured Image with Icons */}
        <div className="relative group">
          <PlayIcon 
            width={50} 
            height={50} 
            className="
              absolute 
              top-[70px] 
              left-[110px] 
              text-white 
              shadow-sm 
              z-10 
              group-hover:scale-110 
              transition-transform 
              duration-300
              bg-white/40
              rounded-full
              p-2
              cursor-pointer
            "
          />
          <Image 
            src="/new-releases/the-wages-of-fear.png"
            alt="The Wages of Fear"
            width={270}
            height={270}
            className="
              cursor-pointer
              object-cover 
              object-center 
              group-hover:scale-110 
              transition-transform 
              duration-300
            "
          />
          <StarIcon 
            width={40} 
            height={40} 
            className="
              absolute 
              bottom-2 
              left-2 
              text-[#FEF3E2] 
              group-hover:scale-110 
              transition-transform 
              duration-300
              
            "
          />
        </div>
      </div>
    </div>
  )
}

export default HomeComponent;