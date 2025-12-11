"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
   
    const [isServicesOpen, setIsServicesOpen] = useState(false); 
    const [isAboutHovered, setIsAboutHovered] = useState(false); 
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); 
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    
    const servicesDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

   
    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const services = [
        "Digital Marketing", "PR", "Traditional Marketing", "News Paper Advertisement",
        "Offline Marketing", "Digital Strategy", "Search Engine Optimization",
        "Social Media Marketing", "PPC & Media Buying", "Website Designing",
        "Influencer Marketing", "Content Marketing", "Creative Designs",
    ];

    const handleOpenPdf = () => {
        window.open('/aboutColorTouch.pdf', '_blank'); 
        setIsMobileMenuOpen(false); 
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false); 
    };

    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm rounded-b-xl px-6 lg:px-40 py-3 flex items-center justify-between mx-auto transition-all duration-300">
            
            {/* --- Logo --- */}
            <div className="max-w-7xl font-bold text-3xl lg:text-[25px] text-transparent bg-clip-text animate-gradient cursor-pointer">
                <a href="#home">ColorTouch</a>
            </div>

            {/* --- Desktop Navigation --- */}
            <ul className="hidden lg:flex items-center space-x-8">
                
                {/* 1. HOME */}
                <li>
                    <a href="#home" className="relative font-medium text-gray-700 hover:text-black transition-colors group py-2 text-[16px]">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 animate-gradient-background transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>

                {/* 2. ABOUT */}
                <li 
                    className="relative py-2 h-full"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                    ref={aboutDropdownRef}
                >
                    <button className="relative flex items-center font-medium text-gray-700 hover:text-black transition-colors focus:outline-none group text-[16px]">
                        About
                        <FaAngleDown className={`ml-1 text-sm transition-transform duration-300 ${isAboutHovered ? 'rotate-180' : ''}`} />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 animate-gradient-background transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {/* About Card Popup */}
                    <div 
                        className={`absolute left-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-xl p-5 z-20 transition-all duration-300 origin-top ${isAboutHovered ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                    >
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Who We Are</h3>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                            We are a creative agency dedicated to adding color to your digital presence through innovative strategies.
                        </p>
                        <button 
                            onClick={handleOpenPdf}
                            className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-semibold hover-animated-bg transition-colors shadow-md"
                        >
                            Explore More (PDF)
                        </button>
                    </div>
                </li>

                {/* 3. SERVICES*/}
                <li className="relative" ref={servicesDropdownRef}>
                    <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="relative flex items-center font-medium text-gray-700 hover:text-black transition-colors focus:outline-none group py-2 text-[16px]"
                    >
                        Services
                        <FaAngleDown className={`ml-1 text-sm transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 animate-gradient-background transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {/* Services List*/}
                    {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-64 max-h-[400px] overflow-y-auto bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-20 px-2 scrollbar-thin scrollbar-thumb--200">
                            {services.map((service, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:text-white hover-animated-bg hover:shadow-md"
                                >
                                    {service}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* 4. OTHER LINKS */}
                {['Portfolio', 'Testimonials', 'Contact'].map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className="relative font-medium text-gray-700 hover:text-black transition-colors group py-2 text-[16px]"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 animate-gradient-background transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* --- Mobile Menu Button --- */}
            <button
                className="lg:hidden mobile-menu-button p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* --- Mobile Navigation Menu --- */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-200"
                >
                    <ul className="flex flex-col p-4 space-y-2 max-h-[85vh] overflow-y-auto">
                        
                        {/* Mobile Home */}
                        <li>
                            <a 
                                href="#home" 
                                onClick={handleLinkClick}
                                className="block py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                                Home
                            </a>
                        </li>

                        {/* Mobile About (Accordion Style) */}
                        <li>
                            <button 
                                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                                className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                                <span>About</span>
                                <FaAngleDown className={`transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Mobile About Content */}
                            {isMobileAboutOpen && (
                                <div className="mx-4 mb-2 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <h3 className="font-bold text-gray-800 mb-2">Who We Are</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        We are a creative agency dedicated to adding color to your digital presence.
                                    </p>
                                    <button 
                                        onClick={handleOpenPdf}
                                        className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                                    >
                                        Explore More (PDF)
                                    </button>
                                </div>
                            )}
                        </li>

                        {/* Mobile Services*/}
                        <li>
                            <button 
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                                <span>Services</span>
                                <FaAngleDown className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isMobileServicesOpen && (
                                <div className="mx-4 mt-1 bg-gray-50 rounded-xl p-2 space-y-1">
                                    {services.map((service, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            onClick={handleLinkClick}
                                            className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all"
                                        >
                                            {service}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* Mobile Other Links */}
                        {['Portfolio', 'Testimonials', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="block py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
