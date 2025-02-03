'use client'

import { TMovies } from "@/types/trending_movies";
import ContentSection from "../ContentSection";
import popular_series from '@/data/popular_series.json';
import VerticalCard from "../VerticalCard";

const Series = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-8">
      <ContentSection title="POPULAR SERIES">
        <div className="grid grid-cols-6 gap-6 mt-8">
          {popular_series.map((t_movie: TMovies, idx: number) => (
            <VerticalCard key={idx} image={t_movie.image} name={t_movie.name} /> 
          ))}
        </div>
      </ContentSection>
    </div>
  )
}

export default Series;