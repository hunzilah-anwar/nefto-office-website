import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "../data/serviceData";
const logo = "/logo-darkmode.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const MotionLink = motion.create(Link);

  return (
    <footer className="relative w-full bg-main-bg pb-10 overflow-hidden">
      {/* ================= MARQUEE ================= */}
      <div className="relative border-y border-white/5 py-4 md:py-6 mb-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(3)
            .fill("Partner with Us to Build Excellence • ")
            .map((text, i) => (
              <span
                key={i}
                className="text-[6vw] md:text-[5vw] lg:text-[3vw] font-black uppercase tracking-tighter text-transparent pr-4"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                }}
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* ================= LEFT ================= */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-30"
                />
              </Link>

              <p className="max-w-sm text-white/70 text-xs sm:text-sm leading-relaxed">
                We take on a limited number of projects each year to ensure deep
                focus, precision, and premium quality execution.
              </p>
            </div>

            {/* CTA BUTTON */}
            <MotionLink
              to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer w-fit flex items-center gap-3 sm:gap-5 bg-white text-black px-1 pr-5 sm:pr-8 py-1 rounded-full"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary ease-in-out rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-500">
                <ArrowUpRight size={18} />
              </div>

              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
                Get In Touch
              </span>
            </MotionLink>
          </div>

          {/* ================= NAV ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Pages
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {["Home", "Case Studies", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "")}`
                  }
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-primary transition"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Services
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {servicesData.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-primary transition"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= Agency Location ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Agency Location
            </h2>

            <div className="space-y-3 text-white/70 text-sm">
              <p>5942 W 124th St, Alsip, IL 60803</p>
              <p>United States</p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-center text-xs sm:text-sm text-white">
            &copy; {currentYear}{" "}
            <Link to={"/"} className="text-primary underline">
              NEFFTO
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
