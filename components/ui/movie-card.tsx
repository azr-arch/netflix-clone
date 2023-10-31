"use client";
import { Movie } from "@prisma/client";
import React from "react";
import Link from "next/link";

import { MoreHorizontal, Play } from "lucide-react";
import FavoriteButton from "./favorite-button";
import useInfoModal from "@/hooks/use-modal";
import Image from "next/image";

interface MovieCardProps {
    movie: Movie | null;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const { openModal } = useInfoModal();

    return (
        <div className="group bg-zinc-900 col-span relative h-[14vw] rounded-md">
            <Image
                src={movie?.thumbnailUrl || ""}
                className="
                w-full h-[14vw] object-cover
                cursor-pointer shadow-xl rounded-md
                group-hover:opacity-90 sm:group-hover:opacity-0
                delay-200 
                transition
                 "
                alt="Thumbnail"
                fill
                sizes="100% 14vw"
            />
            <div
                className="
                    opacity-0
                    absolute
                    top-0
                    transition
                    duration-200
                    z-10
                    invisible
                    sm:visible
                    delay-100
                    w-full scale-0
                    group-hover:scale-125
                    group-hover:-translate-y-[6vw]
                    shadow-xl
                    group-hover:opacity-100
                     "
            >
                <Image
                    src={movie?.thumbnailUrl || ""}
                    className="h-[12vw] w-full object-cover  cursor-pointer transition shadow-xl rounded-t-md"
                    alt="Thumbnail"
                    height={200}
                    width={200}
                    sizes="(min-width: 100px) 100vw, 12vw"
                />
                <div className="grow flex bg-card gap-1 flex-col items-start p-2 lg:p-4  text-black  rounded-b-md shadow-md">
                    <div className="w-full flex items-center  gap-3 text-card-foreground transition">
                        <Link href={`/watch/${movie?.id}`}>
                            <Play
                                aria-label="Play"
                                className="w-3 h-3 md:w-5 md:h-5 cursor-pointer hover:text-zinc-500"
                            />
                        </Link>
                        <FavoriteButton movieId={movie?.id || null} />
                        <button
                            className="ml-auto text-white cursor-pointer"
                            onClick={() => openModal(movie?.id || "")}
                        >
                            <MoreHorizontal />
                        </button>
                    </div>
                    <p className="font-bold text-card-foreground text-[8px] md:text-xs lg:text-lg">
                        {movie?.title}
                    </p>
                    <p
                        className="
                        description 
                        font-medium text-foreground-muted text-[6px] lg:text-sm 
                        w-11/12 text-ellipsis whitespace-normal-wrap 
                        overflow-hidden leading-3"
                    >
                        {movie?.description}
                    </p>
                    <p className="text-[6px] font-medium lg:text-sm mt-2 text-card-foreground">
                        {movie?.genre}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
