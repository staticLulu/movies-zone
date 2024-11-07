'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CustomCard({image}:{image: string}) {
  return (
    <Card 
      className="
        bg-transparent 
        border-none 
        relative 
        hover:scale-110 
        hover:transition-all
        hover:duration-500 
      "
    >
      <Image 
        src={image} 
        alt="godzilla-x-kong-the-new-empire" 
        width={300} 
        height={300} 
        className="object-cover object-center"
      />

      <div 
        className="
          absolute 
          backdrop-blur-sm 
          w-full 
          h-[80px] 
          top-[140px] 
          flex 
          items-center 
          justify-center 
          !rounded-b-xl
        "
      >
        <p className="text-2xl text-slate-100 font-normal">
          helloworld
        </p>
      </div>
    </Card>
  )
}
