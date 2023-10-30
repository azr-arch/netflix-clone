import fetcher from "@/lib/fetcher";

const useRandomMovie = async () => {
    const data = await fetcher("/api/random");
    return data;
};
