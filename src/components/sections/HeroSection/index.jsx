import Image from "next/image";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <Image
                src="/images/hero-banner.jpeg"
                alt="hero-banner"
                fill
                className="opacity-20 object-cover"
                priority
            />

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-20">
                    <div className="w-full lg:w-[45%] space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-snug lg:leading-tight">
                            We Add <span className="animate-gradient">Color</span> to Your{" "}
                            <span className="animate-gradient inline-block mt-2 sm:mt-0 sm:inline">Digital Presence</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            Transform your brand with our creative digital marketing solutions.
                            <span className="hidden sm:inline">
                                <br />
                                We blend strategy with artistry to deliver exceptional results.
                            </span>
                            <span className="sm:hidden">
                                {" "}We blend strategy with artistry to deliver exceptional results.
                            </span>
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8">
                            <Button
                                size="lg"
                                className="px-8 py-6 bg-white text-black text-lg sm:text-xl animate-border hover:scale-105 transition-transform duration-200 w-full sm:w-auto justify-center"
                            >
                                Let's Grow Together
                            </Button>
                            <Button
                                size="lg"
                                className="px-8 py-6 text-lg sm:text-xl hover:scale-105 transition-transform duration-200 w-full sm:w-auto justify-center border-2"
                            >
                                Get Free Audit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
