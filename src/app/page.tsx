"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";

export default function Home() {
    const [theme, setTheme] = useState(() => {
        const storedTheme =
            typeof window !== "undefined"
                ? localStorage.getItem("theme")
                : null;
        return storedTheme !== null ? JSON.parse(storedTheme) : true;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", JSON.stringify(theme));
        }
    }, [theme]);

    return (
        <main
            className="App h-full relative flex min-h-screen flex-col  "
            data-theme={`${theme ? "night" : "light"}`}
        >
            <div
                className={`absolute inset-0  z-[1] ${
                    theme ? 'bg-[url("/grid2.svg")]' : 'bg-[url("/grid.svg")]'
                }  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]`}
            ></div>
            <Navbar theme={theme} setTheme={setTheme} />
        </main>
    );
}
