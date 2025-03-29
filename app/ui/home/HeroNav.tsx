'use client';

import { useHabitStore } from "@/useHabitStore";
import clsx from "clsx";
import Menu from "@/app/assets/menu.svg";

export default function HeroNav() {

    const { showMobileNav, toggleMobileNav } = useHabitStore();

    return (
        <nav className="w-full flex items-center justify-center lg:justify-between px-6 py-4 bg-primary text-text">
            <div className="absolute left-6 lg:hidden">
                <Menu className="w-8 h-auto" />
            </div>
            <div className="font-bold text-2xl">
                Habitonic
            </div>
            <div 
                className={clsx(
                    "w-full h-dvh bg-accent flex flex-col items-start justify-start fixed top-0 z-50 p-6 gap-6 text-md transition-transform duration-300 ease-in-out lg:w-auto lg:h-auto lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:text-lg",
                    {
                        "-translate-x-[200%] lg:translate-x-0": !showMobileNav,
                        "translate-x-0 lg:translate-x-0": showMobileNav
                    }
                )}
            >
                <div className="text-bold text-2xl w-full flex items-center justify-center lg:hidden">
                    Habitonic
                </div>
                <div>Create Account</div>
                <div>Log In</div>
                <div>Theme</div>
            </div>
        </nav>
    );
}