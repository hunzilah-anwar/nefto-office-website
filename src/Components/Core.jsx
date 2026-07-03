import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    id: 1,
    title: "Build powerful brand experiences",
    desc: "Create and manage custom brand assets that drive results while keeping your identity consistent.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Manage content that converts, at scale",
    desc: "Our composable CMS lets you create and manage content that drives results with built-in SEO tools.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Optimize for conversion with AI",
    desc: "Leverage AI to analyze user behavior and automatically improve your conversion rates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Future-Ready Cloud Solutions",
    desc: "Scale your business with secure, high-performance cloud architecture designed for modern needs.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Human-Centric UI/UX Design",
    desc: "We put users at the heart of our design process to create intuitive interfaces people love.",
    image:
      "https://plus.unsplash.com/premium_photo-1661589354357-f56ddf86a0b4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Data-Driven Marketing Strategy",
    desc: "Unlock the power of your data with advanced analytics and targeted digital strategies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
  },
];

const FeatureCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-120 w-full rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border border-gray-100"
    >
      <motion.img
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.8 }}
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 transition-all duration-500 bg-linear-to-t from-[#00419B]/95 via-[#00419B]/30 to-transparent ${isHovered ? "backdrop-blur-[4px]" : "backdrop-blur-0"}`}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-left">
        <motion.h3
          className={`font-bold leading-tight transition-colors duration-300 text-white text-2xl mb-2`}
        >
          {card.title}
        </motion.h3>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-base mb-2 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center gap-2 mt-4 text-[#CB8104] font-bold">
          <span>Learn More</span>
          <span className="text-xl">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Core = () => {
  return (
    // Update 1: Added 'min-h-screen' and 'flex-col justify-center' to ensure the section fills the viewport
    // This forces the mouse to be inside the section when scrolling, activating the Swiper effect immediately.
    <section className="min-h-screen py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00419B] inline-block relative">
            Core Capabilities
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-[#CB8104]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </h2>
        </div>

        {/* SWIPER CONFIGURATION UPDATE */}
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          speed={1000} // Slower speed for smoother scroll-like feel
          mousewheel={{
            forceToAxis: false, // Allows vertical mouse scroll to trigger horizontal slide
            sensitivity: 1.5, // Thoda sensitive kiya taaki easily catch ho
            releaseOnEdges: true, // Jab last slide aaye to page neeche scroll ho
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 feature-swiper" // Increased bottom padding for pagination
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <FeatureCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Core;
