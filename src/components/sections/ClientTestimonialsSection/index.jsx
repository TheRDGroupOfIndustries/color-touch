"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

const testimonials = [
    {
        id: 1,
        rating: 5,
        description:
            "ColorTouch transformed our digital presence completely. Their creative approach and strategic thinking helped us achieve a 400% increase in online engagement. The team's attention to detail and innovative solutions exceeded our expectations.",
        name: "Sarah Johnson",
        company: "CEO, TechFlow Solution",
        image: "/images/p1.jpg",
    },
    {
        id: 2,
        rating: 4,
        description:
            "The ColorTouch team delivered exceptional results for our fitness app launch. Their comprehensive digital marketing strategy helped us reach 50,000 downloads in just three months. Their creativity and expertise are unmatched.",
        name: "Emily Chen",
        company: "Founder, FitLife App",
        image: "/images/p2.jpeg",
    },
    {
        id: 3,
        rating: 5,
        description:
            "Working with ColorTouch was a game-changer for our restaurant. Their branding expertise and social media strategies brought in 200% more customers. The creative team understood our vision perfectly and brought it to life beautifully.",
        name: "Michael Rodriguez",
        company: "Owner, Bella Vista Restaurant",
        image: "/images/p3.jpg",
    },
];

// ⭐ Star rating component
const StarRating = ({ rating }) => (
    <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
            <FaStar
                key={i}
                className={`w-5 h-5 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
            />
        ))}
    </div>
);

const ClientTestimonialsSection = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Client <span className="animate-gradient">Testimonials</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4 mb-8"></div>
                <p className="text-xl my-4 text-gray-600">
                    Hear what our clients say about their experience working with
                    ColorTouch <br />
                    and the results we've achieved together.
                </p>
            </div>

            {/* Swiper Section */}
            <div className="mt-12 max-w-4xl mx-auto px-4">
                <Swiper
                    modules={[Autoplay, Mousewheel, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        bulletClass:
                            "swiper-pagination-bullet w-3 h-3 rounded-full border border-gray-400 mx-1 transition-all",
                        bulletActiveClass:
                            "swiper-pagination-bullet-active animate-border w-4 h-4 border-none",
                    }}
                    className="py-10"
                >
                    {testimonials.map((t) => (
                        <SwiperSlide
                            key={t.id}
                            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-2xl">
                                <StarRating rating={t.rating} />

                                <p className="text-gray-600 text-lg italic text-center mb-8 leading-relaxed">
                                    “{t.description}”
                                </p>

                                <div className="flex items-center justify-center space-x-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 text-lg">
                                            {t.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientTestimonialsSection;
