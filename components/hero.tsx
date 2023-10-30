"use client";

import { useEffect, useState } from "react";
import { Info } from "lucide-react";

const Hero = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fet = async () => {
            const res = await fetch("/api/random");
            const data = await res.json();
            setMovie(data?.randomMovie);
        };
        fet();
    }, []);

    return (
        <div className="relative h-[56.25vw]">
            <video
                src={movie?.videoUrl}
                className="
            w-full h-[56.25vw]
            object-cover object-center
            brightness-50
        "
                poster={movie?.thumbnailUrl}
                // autoPlay
                // muted
            ></video>
            <div className="absolute top-[45%] md:top-[40%] ml-4 md:ml-14">
                <p className="text-white text-2xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
                    {movie?.title}
                </p>
                <p
                    className="text-white
                    text-sm
                    font-medium
                    md:text-lg
                    w-[90%]
                    md:w-[80%]
                    lg:w-1/2
                    mt-3
                    md:mt-8
                    drop-shadow-xl
                "
                >
                    {movie?.description}
                </p>
                {movie && (
                    <div className="flex items-center mt-3 md:mt-4 space-y-3">
                        <button
                            className="
                    bg-white/30 text-white
                    w-auto rounded-md py-1 md:py-2
                    px-2 md:px-4
                    text-xs lg:text-lg
                    font-semibold flex items-center
                    hover:bg-opacity-20 gap-2
                    transition
                    "
                        >
                            <Info />
                            More Info{" "}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
