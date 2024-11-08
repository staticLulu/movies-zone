'use client'

import { TMovies } from "@/app/types/trending_movies";
import ContentSection from "../ContentSection";
import popular_movies from '@/app/data/popular_movies.json';
import VerticalCard from "../VerticalCard";

const TVShows = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="POPULAR MOVIES">    
        <div className="grid grid-cols-6 gap-6 mt-8">
          {popular_movies.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default TVShows;