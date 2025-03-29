'use client';

import { useTheme } from "next-themes";

export default function ThemeToggle() {

    const { setTheme } = useTheme();

    const changeTheme = (theme: string) => {
        setTheme(theme);
    }

    return (
        <div className="flex items-center justify-start">
            <div className="p-3 bg-accent cursor-pointer" onClick={() => changeTheme("system")}>System</div>
            <div className="p-3 bg-accent cursor-pointer"  onClick={() => changeTheme("dark")}>Dark</div>
            <div className="p-3 bg-accent cursor-pointer"  onClick={() => changeTheme("light")}>Light</div>
        </div>
    );
}