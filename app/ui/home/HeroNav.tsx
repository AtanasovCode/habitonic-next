export default function HeroNav() {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-primary text-text">
            <div className="font-bold text-2xl">
                Habitonic
            </div>
            <div className="flex items-center justify-center gap-8 text-lg">
                <div>Create Account</div>
                <div>Log In</div>
                <div>Theme</div>
            </div>
        </nav>
    );
}