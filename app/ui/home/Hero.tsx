import HeroImage from "@/app/ui/home/HeroImage";
import HeroInfo from "@/app/ui/home/HeroInfo";
import HeroNav from "@/app/ui/home/HeroNav";

export default function Hero() {
    return (
        <div className="min-h-screen bg-primary text-text flex items-start justify-center">
            <div
                className="
                    min-h-screen max-w-[95vw] flex flex-col items-center justify-start gap-6
                    md:max-w-[90vw] lg:max-w-[80vw]
                "
            >
                <HeroNav />
                <div className="w-full flex flex-col items-center justify-start lg:flex-row-reverse lg:justify-between">
                    <div className="w-full h-[40dvh] lg:w-2/5 lg:h-[98dvh] rounded-md overflow-hidden">
                        <HeroImage />
                    </div>
                    <div className="w-full lg:w-2/5">
                        <HeroInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}