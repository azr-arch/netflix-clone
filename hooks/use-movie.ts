"use client";

import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useMovie = (movieId: string): Movie | null => {
    const [movie, setMovie] = useState<Movie | null>(null);
    useEffect(() => {
        if (movieId) {
            const fetchMovie = async () => {
                try {
                    const res = await fetch(`/api/movies/${movieId}`);
                    const data = await res.json();

                    setMovie(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchMovie();
        }
    }, [movieId]); // Depend on movieId to avoid unnecessary fetches

    return movie;
};
