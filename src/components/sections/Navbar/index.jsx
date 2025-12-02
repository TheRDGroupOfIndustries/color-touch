"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if click is outside
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            // Close mobile menu if click is outside
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        "Digital Strategy",
        "Search Engine Optimization",
        "Social Media Marketing",
        "PPC & Media Buying",
        "Website Designing",
        "Influencer Marketing",
        "Content Marketing",
        "Creative Designs",
    ];

    return (
        <div className="sticky top-0 z-50 bg-white/90  shadow-sm rounded-t-xl px-6 lg:px-40 py-2 flex items-center justify-between mx-auto">
            {/* Logo */}
            <div className="max-w-7xl font-bold text-3xl lg:text-2xl text-transparent bg-clip-text animate-gradient">
                ColorTouch
            </div>

            {/* Desktop Navigation */}
                {/* Desktop Navigation */}
<ul className="hidden md:flex items-center space-x-8">
    {['Home', 'About'].map((item) => (
        <li key={item}>
            <a
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 hover:text-black transition-colors group py-2"
            >
                {item}
                {/* Gradient Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
        </li>
    ))}

    {/* Dropdown Section */}
    <li className="relative dropdown" ref={dropdownRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center font-medium text-gray-700 hover:text-black transition-colors focus:outline-none group py-2"
        >
            Services
            <FaAngleDown className={`ml-1 text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            
            {/* Gradient Underline for Services */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </button>

        {isOpen && (
            <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-20 px-2">
                {services.map((service, index) => (
                    <a
                        key={index}
                        href="#"
                        className="block px-2 py-3 rounded-lg text-sm font-medium text-gray-700 transition-all duration-300 hover:text-white hover-animated-bg hover:shadow-md"
                    >
                        {service}
                    </a>
                ))}
            </div>
        )}
    </li>

    {['Portfolio', 'Testimonials', 'Contact'].map((item) => (
        <li key={item}>
            <a
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 hover:text-black transition-colors group py-2"
            >
                {item}
                {/* Gradient Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
        </li>
        ))}
    </ul>

                

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden mobile-menu-button p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mx-2 border-t"
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        <li className="hover:text-black transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Home
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            About
                        </li>

                        {/* Mobile Dropdown Section */}
                        <li className="relative">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                                <span className="hover:text-blue-600 transition-colors">Services</span>
                                <FaAngleDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isOpen && (
                                <div className="mt-2 bg-gray-50 rounded-lg p-2 space-y-2">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="block py-2 px-6 transition-all duration-300 cursor-pointer rounded-md text-gray-700 hover:text-blue-600 hover:bg-white font-"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Portfolio
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Testimonials
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Contact
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
