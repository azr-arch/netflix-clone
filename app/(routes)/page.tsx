import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Header from "@/components/header";
import fetcher from "@/lib/fetcher";
import { useCallback } from "react";
import Hero from "@/components/hero";
import MovieCarousel from "@/components/movie-carousel";

export default async function Home() {
    const session = await getServerSession();
    if (!session) {
        redirect("/auth");
    }

    const data = await fetcher("/api/movies");
    console.log(data);
    return (
        <>
            <Header />
            <Hero />
            <div className="pb-40">
                <MovieCarousel title="Trending Now" data={data?.movies} />
            </div>
        </>
    );
}
