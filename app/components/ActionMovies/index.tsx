'use client'

import { TMovies } from "@/app/types/trending_movies";
import ContentSection from "../ContentSection";
import action_movies from '@/app/data/action_movies.json';
import VerticalCard from "../VerticalCard";

const ActionMovies = () => {
  return (
     <div className="max-w-screen-xl mx-auto p-5">
      <ContentSection title="ACTION MOVIES">
        <div className="grid grid-cols-6 gap-6 mt-8">
          {action_movies.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default ActionMovies;