'use client';

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useHabitStore } from "@/useHabitStore";
import LightIcon from "@/app/assets/light.svg";
import DarkIcon from "@/app/assets/dark.svg";

export default function ThemeToggle() {

    const { setTheme } = useTheme();
    const { currentTheme, setCurrentTheme } = useHabitStore();

    const changeTheme = (theme: string) => {
        setTheme(theme);
        setCurrentTheme(theme);
    }

    useEffect(() => {
        const mq = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (mq.matches) {
            setCurrentTheme("dark");
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => setCurrentTheme(evt.matches ? "dark" : "light"));
    }, []);

    return (
        <div 
            className="flex items-center justify-center cursor-pointer"
            onClick={() => changeTheme(currentTheme === "dark" ? "light" : "dark")}
        >
            {
                currentTheme === "dark" ?
                <DarkIcon className="w-8 h-auto" />
                :
                <LightIcon className="w-8 h-auto" />
            }
        </div>
    );
}