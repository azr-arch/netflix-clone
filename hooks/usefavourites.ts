"use client";

import { useState, useEffect } from "react";

export const useFavourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            const res = await fetch("api/favorites");
            const data = await res.json();
            setFavourites(data);
        };

        fetchFavourites();
    }, []);

    return [favourites, setFavourites];
};
