"use client"; // Important for client-side interactivity

import { useState } from "react";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const GetInTouchSection = () => {
    // 1. State for form data and loading status
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
    });
    const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

    const touchData = [
        { title: "Visit Our Office", description: "123 Creative Street, Design District, NY 10001", icon: <MdOutlineLocationOn /> },
        { title: "Call Us", description: "+1(555) 123-4567", icon: <IoCallOutline /> },
        { title: "Email Us", description: "hello@colortouch.agency", icon: <MdOutlineMail /> },
    ];

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" }); // Reset form
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-white py-12 md:py-20" id="contact">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient">Touch</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mx-auto my-4 mb-8 rounded-full"></div>
                <p className="text-gray-600 sm:text-lg lg:text-xl my-4 max-w-4xl mx-auto">
                    Ready to add color to your digital presence? Let's discuss how we can help your brand shine.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mt-8 lg:mt-16 px-4 sm:px-6 lg:px-8 xl:px-28">
                <div className="w-full lg:w-1/2 h-auto space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold">Let's Start Something Amazing</h1>
                    <div className="space-y-4 sm:space-y-3 mt-6">
                        {touchData.map((data, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 p-2 sm:p-3 text-xl sm:text-2xl text-white rounded-full animate-gradient-background flex-shrink-0 flex items-center justify-center">
                                    {data.icon}
                                </div>
                                <div className="font-medium">
                                    <p className="text-base font-semibold text-[15px] sm:text-lg text-gray-800">{data.title}</p>
                                    <p className="text-sm text-gray-500 break-words">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="w-full lg:w-1/2 h-auto space-y-4 sm:space-y-6 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">First Name</label>
                            <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm sm:text-base font-semibold mb-2 text-gray-700">Last Name</label>
                            <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-semibold mb-2 text-gray-700">Email Address</label>
                        <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-semibold mb-2 text-gray-700">Company</label>
                        <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm sm:text-base font-semibold mb-2 text-gray-700">Message</label>
                        <textarea required name="message" value={formData.message} onChange={handleChange} className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none" rows="4"></textarea>
                    </div>

                    {/* Status Message */}
                    {status === "success" && <p className="text-green-600 text-center font-medium">Message sent successfully!</p>}
                    {status === "error" && <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>}

                    <div className="flex justify-center w-full mt-4">
                        <Button 
                            disabled={status === "sending"}
                            type="submit"
                            className="w-full sm:w-full min-w-[200px] h-auto py-4 px-8 text-base sm:text-lg font-semibold text-white animate-gradient-background hover:opacity-90 transition-opacity rounded-lg flex items-center justify-center leading-none disabled:opacity-50"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetInTouchSection;
