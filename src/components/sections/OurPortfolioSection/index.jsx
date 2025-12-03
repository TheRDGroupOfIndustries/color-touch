import Image from "next/image";

const OurPortfolioSection = () => {
    const portfolioImages = [
        "/images/1-new.jpeg",
        "/images/2.jpg",
        "/images/3.jpeg",
        "/images/4.jpg",
        "/images/5.jpeg",
        "/images/6.jpeg"
    ];

    return (
        <div className="bg-white py-12 md:py-20" id="portfolio">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Our <span className="animate-gradient">Portfolio</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4 mb-8"></div>
                <p className="text-gray-600 sm:text-lg lg:text-xl my-4 max-w-4xl mx-auto">
                    Explore our successful projects and see how we've helped brands
                    achieve remarkable digital transformation
                    <span className="hidden lg:inline">
                        <br />
                    </span>
                </p>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:px-20 lg:gap-8 xl:gap-10 mt-8 lg:mt-12">
                    {portfolioImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Image
                                src={src}
                                alt={`Portfolio project ${index + 1}`}
                                width={400}
                                height={250}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-52 xl:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Optional: Overlay on hover */}
                          
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPortfolioSection;
