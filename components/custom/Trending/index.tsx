'use client'

import { TMovies } from "@/types/trending_movies";
import ContentSection from "../ContentSection";
import { CustomCard } from "../CustomCard";
import trending_movies from '@/data/trending_movies.json';

const Trending = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="TRENDING NOW">
        <div className="grid grid-cols-5 gap-6 mt-8">
          {trending_movies.map((t_movie: TMovies, idx: number) => (
            <CustomCard key={idx} image={t_movie.image} name={t_movie.name} />
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default Trending;