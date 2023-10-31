"use client";

import { Movie } from "@prisma/client";
import { Info, Play } from "lucide-react";

import Link from "next/link";
import PlayButton from "./ui/play-button";
import InfoModal from "./modal/info-modal";
import { useState } from "react";
import useInfoModal from "@/hooks/use-modal";

interface HeroDetailsProps {
    movie: Movie | null;
}

const HeroDetails = ({ movie }: HeroDetailsProps) => {
    const { openModal } = useInfoModal();

    return (
        <>
            <div className="absolute top-1/2 space-y-1  sm:space-y-3 -translate-y-1/2 ml-4 md:ml-16">
                <p className="text-white text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
                    {movie?.title}
                </p>
                <p
                    className="text-white
                 text-[8px]
                 md:text-lg
                 w-[90%]
                 md:w-[80%]
                 lg:w-1/2
             
                 font-medium
                 drop-shadow-xl
             "
                >
                    {movie?.description}
                </p>
                {movie && (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => openModal(movie.id)}
                            className="
                        bg-white/20 text-white
                        w-auto rounded-md py-1 md:py-2
                        px-2 md:px-4
                        
                        text-[8px] md:text-[10px] lg:text-lg
                        font-semibold flex items-center
                        hover:opacity-50 gap-2
                        transition
                        "
                        >
                            <Info className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                            More Info
                        </button>

                        <PlayButton movieId={movie.id} />
                    </div>
                )}
            </div>
        </>
    );
};

export default HeroDetails;
