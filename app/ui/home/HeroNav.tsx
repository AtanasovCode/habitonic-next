'use client';

import { useHabitStore } from "@/useHabitStore";
import clsx from "clsx";
import Menu from "@/app/assets/menu.svg";
import Close from "@/app/assets/close.svg";
import ThemeToggle from "@/app/ui/ThemeToggle";

export default function HeroNav() {

    const { showMobileNav, toggleMobileNav } = useHabitStore();

    return (
        <nav className="w-full flex items-center justify-center lg:justify-between px-6 py-4 bg-primary text-text">
            <div
                onClick={() => toggleMobileNav()}
                className="absolute left-2 lg:hidden"
            >
                <Menu className="w-12 h-auto stroke-text" />
            </div>
            <div className="font-bold text-2xl">
                Habitonic
            </div>
            <div
                className={clsx(
                    "w-full h-dvh bg-primary lg:bg-transparent flex flex-col items-start justify-start fixed top-0 z-50 p-6 gap-6 text-lg transition-transform duration-300 ease-in-out lg:w-auto lg:relative lg:h-auto lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:text-lg",
                    {
                        "-translate-x-[200%] lg:translate-x-0": !showMobileNav,
                        "translate-x-0 lg:translate-x-0": showMobileNav
                    }
                )}
            >
                <div className="w-full flex items-center justify-center lg:hidden">
                    <div 
                        onClick={() => toggleMobileNav()}
                        className="absolute left-4"
                    >
                        <Close className="w-6 h-auto stroke-text" />
                    </div>
                    <div className="font-bold text-2xl">
                        Habitonic
                    </div>
                </div>
                <div>Create Account</div>
                <div>Log In</div>
                <ThemeToggle />
            </div>
        </nav>
    );
}