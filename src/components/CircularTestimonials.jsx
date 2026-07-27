"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Calculates the horizontal offset gap based on container width
 */
const calculateGap = (width) => {
  const minWidth = 768; // Mobile/Tablet threshold
  const minGap = 40;
  const maxGap = 80;

  if (width <= minWidth) return minGap;
  // Linear scaling for a smoother feel
  const scale = (width - minWidth) / (1440 - minWidth);
  return Math.floor(
    minGap + (maxGap - minGap) * Math.min(Math.max(scale, 0), 1),
  );
};

const CircularTestimonials = ({
  testimonials = [], // Default to empty array to prevent crashes
  autoplay = true,
  autoplayDelay = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Safeguard: Handle empty data
  const testimonialsLength = testimonials?.length || 0;
  const activeTestimonial = testimonials[activeIndex];

  // 1. RELIABLE RESIZE: Use ResizeObserver instead of window events
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. RELIABLE NAVIGATION: Wrapped in useCallback
  const handleNext = useCallback(() => {
    if (testimonialsLength === 0) return;
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    if (testimonialsLength === 0) return;
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength,
    );
  }, [testimonialsLength]);

  // 3. RELIABLE AUTOPLAY: Manual interaction resets the timer
  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoplay && testimonialsLength > 0) {
      timerRef.current = setInterval(handleNext, autoplayDelay);
    }
  }, [autoplay, autoplayDelay, handleNext, testimonialsLength]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay, activeIndex]); // Re-run when activeIndex changes to fresh the timer

  // 4. KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
        resetAutoplay();
      }
      if (e.key === "ArrowRight") {
        handleNext();
        resetAutoplay();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev, resetAutoplay]);

  // Transform Math for the images
  const getImageStyle = (index) => {
    const gap = calculateGap(containerWidth);
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 10,
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 5,
        opacity: 0.5,
        x: -gap,
        y: -gap * 0.5,
        scale: 0.8,
        rotate: -8,
        boxShadow: "0 0px 0px rgba(0,0,0,0)",
      };
    }
    if (isRight) {
      return {
        zIndex: 5,
        opacity: 0.5,
        x: gap,
        y: -gap * 0.5,
        scale: 0.8,
        rotate: 8,
        boxShadow: "0 0px 0px rgba(0,0,0,0)",
      };
    }
    return {
      zIndex: 0,
      opacity: 0,
      scale: 0.4,
      x: 0,
      y: 0,
      rotate: 0,
    };
  };

  if (testimonialsLength === 0) return null;

  return (
    <div
      className="w-full max-w-6xl mx-auto sm:px-6 px-5 sm:py-16 py-10 overflow-visible"
      ref={containerRef}
    >
      <div className="text-center sm:mb-20 mb-8">
        <h2 className="text-3xl md:text-4xl italic font-bold text-white tracking-tight">
          What Our <span className="text-secondery"> Clients Say</span>
        </h2>

        <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm">
          Real feedback from people who trusted us — and loved the results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center p-4">
        {/* IMAGES */}
        <div className="relative h-75 md:h-100 lg:h-112.5 w-full perspective-1000">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.src + i}
              initial={false}
              animate={getImageStyle(i)}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={t.src}
                alt={t.name}
                className="w-full h-full object-cover rounded-4xl border-2 border-white shadow-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col space-y-6 md:space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-secondery">
              Client Feedback
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-1"
              >
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
                  {activeTestimonial.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mt-2">
                  {activeTestimonial.designation}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <span className="absolute -top-8 -left-4 text-7xl font-serif text-zinc-100/80 -z-10 select-none">
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm md:text-xl leading-relaxed italic font-light text-zinc-200"
              >
                {activeTestimonial.quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => {
                handlePrev();
                resetAutoplay();
              }}
              aria-label="Previous testimonial"
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-200 bg-white hover:bg-secondery transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft
                className="text-primery group-hover:text-white transition-colors"
                size={20}
              />
            </button>

            <button
              onClick={() => {
                handleNext();
                resetAutoplay();
              }}
              aria-label="Next testimonial"
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full hover:bg-secondery bg-black border border-zinc-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight
                className="text-white group-hover:text-white transition-colors"
                size={20}
              />
            </button>

            {/* Progress Dots */}
            <div className="flex items-center gap-2 ml-4">
              {Array.from({ length: testimonialsLength }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-secondery"
                      : "w-2 bg-zinc-500/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
