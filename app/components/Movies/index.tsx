'use client'

import { TMovies } from "@/app/types/trending_movies";
import ContentSection from "../ContentSection";
import { CustomCard } from "../CustomCard";
import new_releases_movies from '@/app/data/new_release_movies.json';

const Movies = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
    <ContentSection title="NEW RELEASES">
      <div className="grid grid-cols-5 gap-6 mt-8">
        {new_releases_movies.map((t_movie: TMovies, idx: number) => (
          <CustomCard key={idx} image={t_movie.image} name={t_movie.name} />
        ))}
      </div>
    </ContentSection>
  </div>
  )
}

export default Movies;