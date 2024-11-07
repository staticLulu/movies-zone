'use client'

import Image from "next/image";
import { PlayIcon, StarIcon, VideoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";

export interface MenuItemProps {
  href: string;
  name: string;
}

export const menuItems: MenuItemProps[] = [
  { href: '/', name: 'Home' },
  { href: 'movies', name: 'Movies' },
  { href: 'tv-shows', name: 'TV Shows' },
  { href: 'anime', name: 'Anime' },
  { href: 'trending', name: 'Trending' },
];

const Header = () => {
  return (
    <div className="relative w-full h-auto">
      <Link href={'/'} rel="preload">
        <Image 
          src="/hero2.png"
          alt="hero2"
          width={1000}
          height={600}
          unoptimized
          className="bg-primary-gradient object-cover w-full h-auto"
        />
      </Link>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-primary-gradient"></div>

      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-2xl mx-auto p-4">
          <div className="flex justify-between items-center">

            {/* Logo Section */}
            <div className="flex items-center gap-1.5">
              <VideoIcon width={40} height={40} className="text-[#FA4032]" /> 
              <p className="text-4xl font-semibold">MOVIES</p>
              <p className="text-4xl text-[#FA4032] font-semibold">ZONE</p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex gap-10 items-center">
              {menuItems.map((item, idx) => (
                <MenuItem key={idx} name={item.name} href={item.href} />
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Content Section */}
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
        <div className="flex justify-between items-center w-full max-w-screen-2xl p-4">
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
    </div>
  );
}

// MenuItem Component with Props
const MenuItem = ({ href, name }: MenuItemProps) => {
  return (
    <ReactScrollLink 
      to={href} 
      activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      className="text-xl font-medium text-slate-200 hover:text-[#FAB12F] cursor-pointer"
    >
      {name}
    </ReactScrollLink>
  );
};

export default Header;
