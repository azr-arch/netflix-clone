"use client";
import { useCallback, useEffect, useState } from "react";

import PlayButton from "../ui/play-button";
import FavoriteButton from "../ui/favorite-button";
import { useMovie } from "@/hooks/use-movie";
import useInfoModal from "@/hooks/use-modal";
import { XCircle } from "lucide-react";

interface InfoModalProps {
    open?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, onClose }) => {
    const [isOpen, setIsOpen] = useState(open);

    const { movieId, closeModal } = useInfoModal();
    let movie = useMovie(movieId || "");

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    // const handleClose = useCallback(() => {
    //     setIsOpen(false);
    //     setTimeout(() => {
    //         onClose();
    //     }, 200);
    // }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="z-50 transition duration-300 bg-black/80 flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div
                    className={`${
                        isOpen ? "scale-100" : "scale-0"
                    } transform relative flex-auto bg-zinc-900 drop-shadow-md`}
                >
                    <div className="relative h-96">
                        <video
                            src={movie?.videoUrl}
                            poster={movie?.thumbnailUrl}
                            className="w-full h-full brightness-50 object-cover object-center"
                        />
                    </div>
                    <div className="absolute bottom-[10%] left-10">
                        <p className="text-white text-3xl md:text-3xl lg:text-4xl font-bold mb-3">
                            {movie?.title}
                        </p>
                        <div className="flex gap-4 items-center">
                            {movie?.id && (
                                <>
                                    <PlayButton movieId={movie.id} />
                                    <FavoriteButton movieId={movie.id} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <button className="absolute right-4 top-4" onClick={closeModal}>
                    <XCircle />
                </button>
                <div
                    className="
                    bg-card flex flex-col items-start p-5 
                    rounded-b-md text-sm lg:text-base 
                    font-medium text-card-foreground"
                >
                    <p className="">{movie?.duration}</p>
                    <p className="mb-2">{movie?.genre}</p>
                    <p className="text-foreground-muted">{movie?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
