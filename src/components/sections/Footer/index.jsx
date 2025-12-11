import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 xl:px-28 py-8 sm:py-12 lg:py-12 bg-[#101725]">
            <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-20">
                {/* Company Info */}
                <div className="w-full lg:w-1/4">
                    <h2 className="animate-gradient text-2xl sm:text-3xl lg:text-2xl font-bold">ColorTouch</h2>
                    <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                        Adding color to your digital presence with creative marketing
                        solutions that drive real results.
                    </p>
                </div>

                {/* Services */}
                <div className="w-full lg:w-1/4">
                    <h2 className="text-white text-lg sm:text-xl font-semibold">Services</h2>
                    <ul className="text-gray-400 mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">SEO Optimization</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Brand Design</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Social Media</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Paid Advertising</li>
                    </ul>
                </div>

                {/* Company */}
                <div className="w-full lg:w-1/4">
                    <h2 className="text-white text-lg sm:text-xl font-semibold">Company</h2>
                    <ul className="text-gray-400 mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">About Us</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Our Team</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Careers</li>
                        <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Contact</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-full lg:w-1/4">
                    <h2 className="text-white text-lg sm:text-xl font-semibold">Follow Us</h2>
                    <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <div className="bg-[#1E2835] h-10 w-10 sm:h-12 sm:w-12 text-lg sm:text-xl p-2 sm:p-3 text-white rounded-full hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center">
                            <FaFacebookF />
                        </div>
                        <div className="bg-[#1E2835] h-10 w-10 sm:h-12 sm:w-12 text-lg sm:text-xl p-2 sm:p-3 text-white rounded-full hover:bg-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                            <FaTwitter />
                        </div>
                        <div className="bg-[#1E2835] h-10 w-10 sm:h-12 sm:w-12 text-lg sm:text-xl p-2 sm:p-3 text-white rounded-full hover:bg-pink-600 transition-colors cursor-pointer flex items-center justify-center">
                            <FaInstagram />
                        </div>
                        <div className="bg-[#1E2835] h-10 w-10 sm:h-12 sm:w-12 text-lg sm:text-xl p-2 sm:p-3 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 sm:mt-12 lg:mt-5 pt-6 sm:pt-8">
                <p className="text-center text-gray-400 text-xl sm:text-sm lg:text-md">
                    © 2025 ColorTouch Digital Marketing Agency. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
