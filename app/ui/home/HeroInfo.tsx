import GetStartedButton from "@/app/ui/home/GetStartedButton";

export default function HeroInfo() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="text-5xl font-bold text-left lg:text-7xl">
                The perfect formula for your best day
            </div>
            <div className="text-left text-sm md:text-base text-text opacity-90">
                Designed to help you build and sustain meaningful habits.
                Unlike generic apps, Habitonic focuses on simplicity and
                effectiveness. Create tasks or habits that matter to
                you, and track your progress by marking them complete each day.
            </div>
            <GetStartedButton />
        </div>
    );
}