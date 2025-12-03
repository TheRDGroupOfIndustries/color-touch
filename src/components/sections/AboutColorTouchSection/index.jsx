import Image from "next/image";

const AboutColorTouchSection = () => {
    return (
        <div className="bg-white py-12 px-6 md:py-20" id="about">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    About <span className="animate-gradient">ColorTouch</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4 mb-8"></div>
                <p className="text-gray-600 sm:text-lg lg:text-xl my-4 max-w-4xl mx-auto">
                    We're a passionate team of digital artists and marketing
                    strategists who{" "}
                    <span className="hidden sm:inline">
                        <br />
                    </span>
                    believe every brand deserves to shine in the digital landscape.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-8 lg:mt-16 px-4 sm:px-6 lg:px-28">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 h-auto lg:h-96 space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold">Our Creative Journey</h1>
                    <p className="text-gray-600 sm:text-lg lg:text-lg leading-relaxed">
                        Founded in 2020, ColorTouch emerged from a simple
                        belief: digital marketing should be as
                        vibrant and dynamic as the brands we represent. We've
                        helped over 500 companies transform
                        their online presence through innovative strategies and
                        creative excellence.
                    </p>

                    <div className="space-y-3 mt-6">
                        {[
                            "Creative Excellence",
                            "Data-Driven Results",
                            "Client Success Focus",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span
                                    className="h-16 w-16 sm:h-8 sm:w-8 rounded-full animate-gradient-background "></span>
                                <p className="lg:text-[20px] sm:text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 relative">
                    <Image
                        className="rounded-lg object-cover"
                        src="/images/office-img.jpg"
                        fill
                        alt="office img"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutColorTouchSection;
