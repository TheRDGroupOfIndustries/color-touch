import Image from "next/image";
import { CiGlobe, CiSearch } from "react-icons/ci";
import { VscGraph, VscSymbolColor } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";

const OurServicesSection = () => {
    const servicesData = [{
        icon: <CiSearch />,
        title: "SEO Optimization",
        description: "Boost your search rankings with our advanced SEO strategies. We optimize every aspect of your online presence for maximum visibility."
    }, {
        icon: <VscSymbolColor />,
        title: "Brand Design",
        description: "Create a memorable brand identity that resonates with your audience. From logos to complete visual systems, we bring your vision to life."
    }, {
        icon: <IoShareSocialOutline />,
        title: "Social Media",
        description: "Engage your audience across all social platforms with compelling content and strategic campaigns that drive real results."
    }, {
        icon: <RiAdvertisementFill />,
        title: "Paid Advertising",
        description: "Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other premium platforms."
    }, {
        icon: <CiGlobe />,
        title: "Web Development",
        description: "Build stunning, high-performance websites that convert visitors into customers. Modern design meets powerful functionality."
    }, {
        icon: <VscGraph />,
        title: "Analytics & Insights",
        description: "Make data-driven decisions with comprehensive analytics and reporting. Track performance and optimize for continuous growth."
    }];

    return (
        <div className="bg-gray-50 py-12 md:py-20">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    Our <span className="text-transparent bg-clip-text animate-gradient-background animate-gradient">Services</span>
                </h1>
                <div className="w-24 h-1 animate-gradient-background mx-auto my-2 rounded-full mb-5"></div>
                <p className="text-gray-600 sm:text-lg lg:text-xl my-4 max-w-4xl mx-auto">
                    Comprehensive digital marketing solutions designed to
                    elevate your brand and drive meaningful engagement
                    with your audience.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto">
               {servicesData.map((service, index) => (
    <div
        className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
        key={index}
    >
        
        <div className="h-14 w-14 rounded-2xl animate-gradient-background flex items-center justify-center shadow-md mb-6 pt-[13px]">
            
            <span className="text-white text-3xl flex items-center justify-center">
                {service.icon}
            </span>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">
            {service.description}
        </p>
    </div>
))}
            </div>
        </div>
    );
};

export default OurServicesSection;

