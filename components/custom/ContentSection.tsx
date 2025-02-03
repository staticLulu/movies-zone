'use client'

import { Progress } from "@/components/ui/progress";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from 'react';

const ContentSection = ({title, children}:{title: string; children: ReactNode}) => {
  return (
    <div>
      <div className="flex justify-between">
        <p 
          className="
            text-3xl 
            font-extrabold 
            text-white
            mb-2
          "
        >
          {title}
        </p>
        <div className="flex items-center text-[#AAA9A9]">
          <Link href={''} className="text-base hover:text-[#FAB12F]">
            View all
          </Link>
          <ChevronRightIcon width={26} height={26} />
        </div>
      </div>
        <Progress value={10} className="h-1" />
      {children}
    </div>
  )
}

export default ContentSection;