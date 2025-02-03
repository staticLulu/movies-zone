'use client'

import { TMovies } from "@/types/trending_movies";
import ContentSection from "../ContentSection";
import anime_movies from '@/data/animeList.json';
import VerticalCard from "../VerticalCard";

const Anime = () => {
  return (
     <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="ANIME">
        <div className="grid grid-cols-6 gap-6 mt-8">
          {anime_movies.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default Anime;