'use client'

import { TMovies } from "@/app/types/trending_movies";
import ContentSection from "../ContentSection";
import { VerticalCard } from "../VerticalCard";
import top_rated from '@/app/data/top_rated.json';

const TopRated = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="TOP RATED">
        <div className="grid grid-cols-6 gap-6 mt-8">
          {top_rated.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default TopRated;