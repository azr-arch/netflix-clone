"use client";

import { useState, useCallback, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
const AuthPage = () => {
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [formVariant, setFormVariant] = useState("login");

    const toggleFormVariant = useCallback(() => {
        setFormVariant((current) => (current === "login" ? "register" : "login"));
    }, []);

    const login = useCallback(async () => {
        try {
            const res = await signIn("credentials", {
                email: emailInput,
                password: passwordInput,
                redirect: true,
                callbackUrl: "/",
            });
            // console.log(res);
        } catch (error) {
            console.log("login", error);
        }
    }, [emailInput, passwordInput]);

    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                email: emailInput,
                name: usernameInput,
                password: passwordInput,
            });
            login();
        } catch (error) {
            console.log("register", error);
        }
    }, [emailInput, passwordInput, usernameInput, login]);

    return (
        <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        style={{ width: "auto", height: "auto" }}
                        width={120}
                        height={30}
                    />
                </nav>

                <div className="flex justify-center flex-col">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 l:w-2/5 max-w-md rounded-md w-full">
                        <h2 className="text-2xl md:text-4xl text-white mb-8 font-semibold">
                            {formVariant === "login" ? "Login" : "Create an account"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {formVariant === "register" && (
                                <Input
                                    id="username"
                                    value={usernameInput}
                                    type="text"
                                    label="Username"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        setUsernameInput(e.target.value);
                                    }}
                                />
                            )}
                            <Input
                                id={"email"}
                                value={emailInput}
                                label="Email"
                                type="email"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setEmailInput(e.target.value);
                                }}
                            />
                            <Input
                                id={"password"}
                                value={passwordInput}
                                label="Password"
                                type="password"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setPasswordInput(e.target.value);
                                }}
                            />
                        </div>
                        <button
                            onClick={formVariant === "login" ? login : register}
                            className="bg-red-600 hover:bg-red-700 transition w-full mt-12 py-3 rounded-md"
                        >
                            Login
                        </button>

                        <p className="text-sm mt-8 text-center text-zinc-600">
                            {formVariant === "login"
                                ? "First time using netflix?"
                                : "Already have an account?"}
                            <span className="text-zinc-300" onClick={toggleFormVariant}>
                                {formVariant === "login" ? "Create an account" : "Login"}
                            </span>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
