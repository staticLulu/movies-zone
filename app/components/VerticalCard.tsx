'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"
import MeteorEffect from "./MeteorEffect";

export function VerticalCard({image, name}:{image: string; name: any;}) {
  return (
    <div 
      className="
        w-full 
        relative 
        max-w-xs 
        h-[300px] 
        hover:scale-105 
        transition-transform 
        duration-500
        cursor-pointer
      "
    >
      <div 
        className="
          absolute 
          inset-0 
          h-full 
          w-full 
          bg-gradient-to-r 
          from-blue-500 
          to-teal-500 
          transform 
          scale-[0.80] 
          bg-red-500 
          rounded-full 
          blur-3xl
          animate-[fadeInUp_0.8s_ease-out_forwards]
        "
      />
      <div 
        className="
          relative 
          shadow-xl 
          bg-gray-900 
          border 
          border-gray-800 
          h-full 
          overflow-hidden 
          rounded-2xl 
          flex 
          flex-col 
          justify-end 
          items-start
        "
      >
        <Card className="bg-transparent border-none">
          <Image 
            src={image} 
            alt="godzilla-x-kong-the-new-empire" 
            width={500} 
            height={500} 
            unoptimized
            className="object-cover object-top h-auto w-[200px] opacity-90 hover:opacity-95"
          />

          <p 
            className="
              text-white 
              text-lg 
              text-center 
              p-4 
              h-[80px] 
              flex 
              items-center 
              justify-center
            "
          >
            {name}
          </p>
        </Card>
        <MeteorEffect number={20} />
      </div>
    </div>
  )
}

export default VerticalCard;