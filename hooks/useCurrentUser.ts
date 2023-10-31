"use client";

import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from "swr";
import axios from "axios";
import { headers } from "next/headers";
import { User } from "@prisma/client";
import Error from "next/error";

export const useCurrentUser = async (url: string) => {
    const res = await fetch(`${process.env.BASE_API_ROUTE}${url}`, { headers: headers() });
    const data = await res.json();
    return data;
};
