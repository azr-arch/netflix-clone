import axios from "axios";
import { headers as NextHeader } from "next/headers";

const fetcher = async (url: string) => {
    try {
        const res = await fetch(`${process.env.BASE_API_ROUTE}${url}`, {
            headers: NextHeader(),
        });

        return res.json();
    } catch (error) {
        console.log("[FETCHER]", error);
    }
};
export default fetcher;
