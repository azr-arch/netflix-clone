import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Header from "@/components/header";
import fetcher from "@/lib/fetcher";
import { useCallback } from "react";
import Hero from "@/components/hero";
import MovieCarousel from "@/components/movie-carousel";
import InfoModal from "@/components/modal/info-modal";

export default async function Home() {
    const session = await getServerSession();
    if (!session) {
        redirect("/auth");
    }

    const [movies, favourites] = await Promise.all([
        fetcher("/api/movies"),
        fetcher("/api/favorites"),
    ]);

    return (
        <>
            <Header />
            <Hero />
            <div className="pb-40 px-5 md:px-0">
                <MovieCarousel title="Trending Now" data={movies} />

                {favourites.length > 0 && <MovieCarousel title="Favourites" data={favourites} />}
            </div>
        </>
    );
}
