"use client";

import { Movie } from "@prisma/client";
import MovieCard from "./ui/movie-card";

interface MovieCarouselProps {
    data: Movie[];
    title: string;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ data, title }) => {
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 ">
            <div className="">
                <p className="text-white md:text-lg lg:text-2xl font-semibold mb-4">
                    {title || ""}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {data.length > 0 &&
                        data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieCarousel;
