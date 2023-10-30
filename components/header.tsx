"use client";

import { signOut } from "next-auth/react";
import NavbarItem from "./ui/navbar-item";
import MobileMenu from "./ui/mobile-menu";
import { useEffect, useState } from "react";
import { Search, Bell, User } from "lucide-react";
import AccountMenu from "./ui/account-menu";

const TOP_OFFSET = 70;

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [accountMenu, setAccountMenu] = useState(false);
    const [headerEffect, setHeaderEffect] = useState(false);

    const mobileNavToggle = () => {
        setMobileNav((prev) => !prev);
    };
    const accountMenuToggle = () => {
        setAccountMenu((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {
                setHeaderEffect(true);
            } else {
                setHeaderEffect(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="w-full fixed z-40">
            <div
                className={`
                px-4 md:px-16 py-6 flex items-center 
                transition duration-400 
               ${headerEffect ? "bg-zinc-900/90" : ""}
            `}
            >
                <img src="./images/logo.png" className="h-5 md:h-8 mr-12" />
                {/* For Desktop screens */}
                <nav className="flex-row ml-8 gap-6 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="TV Shows" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                </nav>
                {/* For mobile Screens */}
                <div
                    onClick={mobileNavToggle}
                    className="lg:hidden select-none text-white cursor-pointer relative hover:text-gray-400"
                >
                    Menu
                    <MobileMenu visible={mobileNav} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <Search />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <Bell />
                    </div>
                    <div
                        onClick={accountMenuToggle}
                        className="flex flex-row items-center gap-2 relative cursor-pointer hover:bg-black/80 p-2 rounded-sm"
                    >
                        {/* <div className="w-6 h-6 lg:w-10 lg:h-10 flex-items-cen rounded-md overflow-hidden"> */}
                        <User />
                        {/* </div> */}
                        <AccountMenu visible={accountMenu} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
