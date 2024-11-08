'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"
import MeteorEffect from "./MeteorEffect";

export function VerticalCard({image, name}:{image: string; name: any;}) {
  return (
    <div>
      <div className=" w-full relative max-w-xs h-[330px]">
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
              className="object-cover object-top h-auto w-[200px] opacity-95"
            />

            <p className="text-white text-xl text-center p-4 h-[100px]">{name}</p>
          </Card>
          <MeteorEffect number={20} />
        </div>
      </div>
    </div>
  )
}

export default VerticalCard;