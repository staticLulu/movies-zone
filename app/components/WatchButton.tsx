"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RocketIcon } from "@radix-ui/react-icons";

export const WatchButton = ({
  className,
  href,
  title,
}: {
  className?: string;
  href: any;
  title: string;
}) => {
  return (
  <Link 
    href={href}
    // target="_blank"
    className={cn(
      "rounded-xl group/btn overflow-hidden relative flex items-center justify-self-center w-fit",
      className
    )}
    >
      <div className="absolute inset-0 bg-dot-black/[0.1]" />
      <div className="relative z-40">
        <button 
          className="
            relative 
            inline-flex 
            overflow-hidden 
            rounded-full 
            p-[1.3px] 
            focus:outline-none 
            w-[170px]
          "
        >
          <span 
            className="
              absolute 
              inset-[-1000%] 
              animate-[spin_5s_linear_infinite] 
              bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#FA4032_50%,#FA4032_100%)]
            "
          />
          <div 
            className="
              inline-flex 
              h-full 
              w-full 
              cursor-pointer 
              items-center 
              rounded-full 
              bg-secondary/40
              hover:bg-secondary/10 
              px-4 
              py-2.5 
              backdrop-blur-3xl
              transition-all 
              duration-500 
              ease-out
              hover:space-x-2
              text-start 
            "
          >
            <p 
              className="
                text-lg 
                text-white 
                font-medium 
                mr-2.5 
                transition-all 
                duration-500 
                ease-out
              "
            >{title}</p>
            <RocketIcon width={20} height={20} className="transition-all duration-300 ease-out text-[#FA4032]" />
          </div>
        </button>
      </div>
    </Link>
  );
};

