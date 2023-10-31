"use client";

import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import Image from "next/image";
import HeroBackground from "./hero-background";
import HeroDetails from "./hero-details";
import InfoModal from "./modal/info-modal";
import useInfoModal from "@/hooks/use-modal";

const Hero = () => {
    const [movie, setMovie] = useState(null);
    const { isOpen, closeModal } = useInfoModal();

    useEffect(() => {
        const fet = async () => {
            const res = await fetch("/api/random");
            const data = await res.json();
            setMovie(data?.randomMovie);
        };
        fet();
    }, []);

    return (
        <>
            <InfoModal open={isOpen} onClose={closeModal} />
            <div className="relative h-[56.25vw] max-h-[80vh]">
                <HeroBackground movie={movie} />
                <HeroDetails movie={movie} />
                <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>
        </>
    );
};

export default Hero;
