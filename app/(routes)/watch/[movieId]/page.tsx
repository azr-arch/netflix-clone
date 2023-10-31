"use client";

import { useParams, useRouter } from "next/navigation";
import { useMovie } from "@/hooks/use-movie";
import Link from "next/link";

import { MoveLeft } from "lucide-react";
const WatchPage = () => {
    const params = useParams<{ movieId: string }>();
    const router = useRouter();

    const movie = useMovie(params.movieId);
    return (
        <div className="w-screen h-screen bg-black">
            <div
                className="fixed top-0 w-full p-4 z-10 flex items-center gap-8 
                 bg-black/70
                "
            >
                <Link href="..">
                    <MoveLeft />
                </Link>

                <p className="text-white text-xl md:text-3xl font-bold">{movie?.title}</p>
            </div>
            <video
                className="mt-[70px]"
                src={movie?.videoUrl}
                poster={movie?.thumbnailUrl}
                controls
                muted
            />
        </div>
    );
};

export default WatchPage;
