"use client";
import { Play } from "lucide-react";
import Link from "next/link";
interface PlayButtonProps {
    movieId?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    return (
        <Link
            className="
                        bg-black text-white
                        w-auto rounded-md py-1 md:py-2
                        px-2 md:px-4
                
                        text-[8px] md:text-[10px] lg:text-lg
                        font-semibold flex items-center
                        hover:opacity-50 gap-2
                        transition
                        "
            href={`/watch/${movieId}`}
        >
            <Play className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6" />
            Play
        </Link>
    );
};

export default PlayButton;
