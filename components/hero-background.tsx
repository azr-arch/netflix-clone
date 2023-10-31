import React from "react";
import { Movie } from "@prisma/client";
import Image from "next/image";
import { Interface } from "readline";

interface HeroBackgroundProps {
    movie: Movie | null;
}

const HeroBackground = ({ movie }: HeroBackgroundProps) => {
    return (
        <video
            src={movie?.videoUrl}
            className="
           w-full h-[56.25vw]
           max-h-[80vh]
           object-cover object-center
           brightness-50
       "
            poster={movie?.thumbnailUrl}
            // autoPlay
            // muted
        ></video>
    );
};

export default HeroBackground;
