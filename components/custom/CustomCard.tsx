'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"
import MeteorEffect from "./MeteorEffect"

export function CustomCard({ image, name }: { image: string; name: string }) {
  return (
    <div 
      className="
        w-full 
        relative 
        max-w-xs 
        hover:scale-105 
        hover:transition-transform 
        hover:duration-500
        cursor-pointer
        rounded-2xl
        overflow-hidden
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
          hover:scale-[0.80] 
          bg-red-500 
          rounded-2xl 
          blur-3xl
          hover:animate-[fadeInUp_0.8s_ease-out_forwards]
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
        <Card 
          className="
            bg-transparent 
            border-none 
            relative 
            transition-transform 
            duration-300
            cursor-pointer
            rounded-2xl
          "
        >
          <Image 
            src={image} 
            alt="godzilla-x-kong-the-new-empire" 
            width={300} 
            height={300} 
            priority={true}
            className="
              object-cover 
              object-center 
              h-[200px] 
              w-full 
              rounded-2xl 
              animate-[fadeInUp_0.8s_ease-out_forwards]
              opacity-90
            "
          />

          <div 
            className="
              absolute 
              backdrop-blur-sm 
              w-full 
              h-[60px] 
              top-[140px] 
              flex 
              items-center 
              justify-center 
              rounded-b-2xl
              overflow-hidden
              p-5
            "
          >
            <p className="text-lg text-slate-100 font-normal text-center">
              {name}
            </p>
          </div>
        </Card>
        <MeteorEffect number={20} />
      </div>
    </div>
  )
}
