'use client'

import { TMovies } from "@/app/types/trending_movies";
import ContentSection from "../ContentSection";
import { CustomCard } from "../CustomCard";
import trending_movies from '@/app/data/trending_movies.json';

const Anime = () => {
  return (
     <div className="max-w-screen-xl mx-auto p-5">
      <ContentSection title="ANIME">
        <div className="grid grid-cols-5 gap-6 mt-8">
          {trending_movies.map((t_movie: TMovies, idx: number) => (
            <CustomCard key={idx} image={t_movie.image} />
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default Anime;