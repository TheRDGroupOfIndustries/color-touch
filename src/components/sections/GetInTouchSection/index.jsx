import Image from "next/image";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const GetInTouchSection = () => {
    const touchData = [
        {
            title: "Visit Our Office",
            description: "123 Creative Street, Design District, NY 10001",
            icon: <MdOutlineLocationOn />
        },
        {
            title: "Call Us",
            description: "+1(555) 123-4567",
            icon: <IoCallOutline />
        },
        {
            title: "Email Us",
            description: "hello@colortouch.agency",
            icon: <MdOutlineMail />
        },
    ];

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Get In <span className="animate-gradient">Touch</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4 mb-8"></div>
                <p className="text-gray-600 sm:text-lg lg:text-xl my-4 max-w-4xl mx-auto ">
                    Ready to add color to your digital presence? Let's discuss
                    how we can help your brand shine in the digital landscape.
                    <span className="hidden lg:inline">
                        <br />
                    </span>
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mt-8 lg:mt-16 px-4 sm:px-6 lg:px-8 xl:px-28">
                {/* Contact Information */}
                <div className="w-full lg:w-1/2 h-auto space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold">Let's Start Something Amazing</h1>
                    <div className="space-y-4 sm:space-y-3 mt-6">
                        {touchData.map((data, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 p-2 sm:p-3 text-xl sm:text-2xl text-white rounded-full animate-gradient-background flex-shrink-0 flex items-center justify-center">
                                    {data.icon}
                                </div>
                                <div className="font-medium">
                                    <p className="text-base sm:text-lg">{data.title}</p>
                                    <p className="text-sm text-gray-500 break-words">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <form className="w-full lg:w-1/2 h-auto space-y-4 sm:space-y-6 rounded-lg">
                    {/* Name Fields */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm sm:text-base font-medium mb-2">First Name</label>
                            <input
                                type="text"
                                className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"

                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm sm:text-base font-medium mb-2">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"

                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Company Field */}
                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-medium mb-2">Company</label>
                        <input
                            type="text"
                            className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-medium mb-2">Message</label>
                        <textarea
                            className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                   <div className="flex justify-center w-full mt-4">
    <Button 
        type="submit"
        className="w-full sm:w-auto min-w-[200px] h-auto py-4 px-8 text-base sm:text-lg font-semibold animate-gradient-background hover:scale-105 transition-transform rounded-lg flex items-center justify-center leading-none"
    >
        Send Message
    </Button>
</div>
                </form>
            </div>
        </div>
    );
};

export default GetInTouchSection;
