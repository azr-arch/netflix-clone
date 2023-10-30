interface MovieCarouselProps {
    data: Record<string, any>[];
    title: string;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ data, title }) => {
    // if (!data) {
    //     return null;
    // }
    console.log(data);

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 ">
            <div className="">
                <p className="text-white md:text-lg lg:text-2xl font-semibold mb-4">
                    {title || ""}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {data?.map((movie) => (
                        <div key={movie.id}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCarousel;
