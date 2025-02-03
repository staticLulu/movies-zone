'use client'

import { Element, animateScroll as scroll } from 'react-scroll';
import Anime from "../components/custom/Anime";
import Header from "../components/custom/Header";
import Movies from "../components/custom/Movies";
import Series from "../components/custom/Series";
import Trending from "../components/custom/Trending";
import TVShows from "../components/custom/TVShows";
import TopRated from '../components/custom/TopRated';
import FooterComponent from '../components/custom/Footer';
import ActionMovies from '../components/custom/ActionMovies';
import ComedyMovies from '../components/custom/ComedyMovies';

export default function Home() {
  const sectionStyles = `{
    bg-myContentSection 
    pt-12
  }`
  return (
    <div className="h-screen">
      <Element name='/' href=''> <Header /> </Element>
      <Element name='trending' href='' className={sectionStyles}> <Trending /> </Element>
      <Element name='movies' href='' className={sectionStyles}> <Movies /></Element>
      <TopRated /> 
      <Element name='series' href='' className={sectionStyles}> <Series /> </Element>
      <Element name='tv-shows' href='' className={sectionStyles}> 
        <TVShows /> 
      </Element>
        <ComedyMovies />
        <ActionMovies /> 
      <Element name='anime' href='' className={sectionStyles}> <Anime /> </Element>
      <FooterComponent />
    </div>
  );
}
