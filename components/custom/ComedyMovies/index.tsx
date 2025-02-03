'use client'

import { TMovies } from "@/types/trending_movies";
import ContentSection from "../ContentSection";
import comedy_movies from '@/data/comedy_movies.json';
import VerticalCard from "../VerticalCard";

const ComedyMovies = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="COMEDY MOVIES">
        <div className="grid grid-cols-6 gap-6 mt-8">
          {comedy_movies.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default ComedyMovies;