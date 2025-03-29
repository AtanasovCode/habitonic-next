import HeroImage from "@/app/ui/home/HeroImage";
import HeroInfo from "@/app/ui/home/HeroInfo";

export default function Hero() {
    return (
        <div className="min-h-screen bg-primary text-text flex items-start justify-center">
            <div className="min-h-screen max-w-[90vw] flex flex-col-reverse lg:flex-row items-center justify-end lg:justify-between gap-8">
                <div className="w-full lg:w-2/5">
                    <HeroInfo />
                </div>
                <div className="w-full h-[40dvh] lg:w-2/5 lg:h-[98dvh] rounded-md overflow-hidden">
                    <HeroImage />
                </div>
            </div>
        </div>
    );
}