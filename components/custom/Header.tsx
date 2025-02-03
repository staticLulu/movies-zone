'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlayIcon, StarIcon, VideoIcon } from "@radix-ui/react-icons";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { WatchButton } from "./WatchButton";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);  // Add blur when scrollY is greater than 0
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-auto">
      <Link href={'/'} rel="preload">
        <Image 
          src="/hero2.png"
          alt="hero2"
          width={1000}
          height={600}
          priority={true}
          className="bg-primary-gradient object-cover w-full h-auto"
        />
      </Link>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-primary-gradient"></div>

      {/* Main Header */}
      <header className={`
        fixed 
        top-0 
        left-0 
        w-full 
        z-10 
        ${scrolled ? 'backdrop-blur-3xl bg-slate-800/40' : ''}
      `}>
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex justify-between items-center">

            {/* Logo Section */}
            <Link href={'/'} className="flex items-center gap-1.5">
              <VideoIcon width={40} height={40} className="text-[#FA4032]" /> 
              <p className="text-4xl font-semibold">MOVIES</p>
              <p className="text-4xl text-[#FA4032] font-semibold">ZONE</p>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex gap-10 items-center">
              {menuItems.map((item, idx) => (
                <ReactScrollLink 
                  key={idx}
                  to={item.href} 
                  activeClass="!text-[#FAB12F]" 
                  spy={true} 
                  smooth={true} 
                  offset={72} 
                  delay={0}
                  duration={500} 
                  className="
                    text-xl 
                    font-medium 
                    text-slate-200 
                    hover:!text-[#FAB12F]/50 
                    cursor-pointer
                  "
                >
                  {item.name}
                </ReactScrollLink>
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
          !top-[430px] 
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
              In &quot;Furiosa: A Mad Max Saga,&quot; the fierce warrior Furiosa embarks on a perilous journey through a 
              post-apocalyptic wasteland, battling ruthless enemies to reclaim her homeland.
            </p>
            <div className="flex justify-start mt-5">
              <WatchButton href={'/'} title="Watch Now" />
            </div>
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
                group-hover:transition-transform 
                group-hover:duration-300
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
              priority={true}
              className="
                cursor-pointer
                object-cover 
                object-center 
                group-hover:scale-110 
                group-hover:transition-transform 
                group-hover:duration-300
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
                group-hover:transition-transform 
                group-hover:duration-300
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
