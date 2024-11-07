'use client'

import { Element, animateScroll as scroll } from 'react-scroll';
import Anime from "./components/Anime";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Trending from "./components/Trending";
import TVShows from "./components/TVShows";

export default function Home() {
  const sectionStyles = `{
    bg-myContentSection 
    pt-12
  }`
  return (
    <div className="h-screen">
      <Element name='/' href=''> <Header /> </Element>
      <Element name='trending' href='' className={sectionStyles}> <Trending /> </Element>
      <Element name='movies' href='' className={sectionStyles}> <Movies /> </Element>
      <Element name='tv-shows' href='' className={sectionStyles}> <TVShows /> </Element>
      <Element name='anime' href='' className={sectionStyles}> <Anime /> </Element>
      <Element name='series' href='' className={sectionStyles}> <Series /> </Element>
    </div>
  );
}
