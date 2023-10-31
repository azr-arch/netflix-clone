"use client";

import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Movie } from "@prisma/client";

interface FavoriteButtonProps {
    movieId?: string | null;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const router = useRouter();
    const [favourites, setFavourites] = useState<Movie[]>([]);

    const helper = async () => {
        const res = await fetch("api/favorites");
        const data = await res.json();
        setFavourites(data);
    };

    useEffect(() => {
        helper();
    }, []);

    let isFavourite = useMemo(() => {
        return favourites.some((favourite) => favourite.id === movieId) || null;
    }, [favourites, movieId]);

    const toggleFavourite = async () => {
        if (!movieId) return;

        if (isFavourite) {
            // Remove from favourite
            await axios.delete(`api/favorite/${movieId}`);
        } else {
            // Add to the favourites
            await axios.post(`api/favorite/${movieId}`);
        }
        router.refresh();
    };
    return (
        <button onClick={toggleFavourite} className="cursor-pointer p-2 ">
            <Heart className={`w-3 h-3 md:w-5 md:h-5`} />
        </button>
    );
};

export default FavoriteButton;
