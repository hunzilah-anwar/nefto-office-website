import React from "react";
import { motion } from "framer-motion";
import WebDevImg from "../assets/web-dev.png";
import DigitalMarketingImg from "../assets/digital-marketing.png";
import TiktokImg from "../assets/tiktok.png";
import YoutubeImg from "../assets/youtube.png";
import VideoEditing from "../assets/video-editing.png";
import Amazon from "../assets/amazon.png";
import { Link } from "react-router-dom";

const brandsRow = [
  {
    name: "Web Development",
    url: WebDevImg,
  },
  {
    name: "Digital Marketing",
    url: DigitalMarketingImg,
  },
  {
    name: "Amazon",
    url: Amazon,
  },
  {
    name: "Tik Tok",
    url: TiktokImg,
  },
  {
    name: "Youtube",
    url: YoutubeImg,
  },
  {
    name: "Video Editing",
    url: VideoEditing,
  },
];

const PartnerSection = () => {
  return (
    <section className="relative w-full bg-main-bg sm:pt-16 pt-10 sm:px-6 px-4 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-200 h-200 rounded-full bg-[#042558] blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 rounded-full bg-[#042558] blur-[140px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-4 sm:mb-20 mb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-black text-white italic leading-[0.9] uppercase"
        >
          Full-Service
          <span className="text-primary"> WEB Agency</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto text-zinc-400 md:text-[16px] text-sm mt-6"
        >
          From startups we create{" "}
          <span className="text-white font-medium">custom solutions</span> that
          grow brands online.
        </motion.p>
      </div>

      {/* MARQUEE ROW 1 */}
      <div className="flex overflow-hidden gap-8">
        <div className="flex min-w-full gap-8 animate-marquee">
          {[...brandsRow, ...brandsRow].map((brand, i) => (
            <LogoCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="sm:mt-24 mt-10 text-center pb-20 border-b border-white/10">
        <Link to="/casestudies">
          <button className="relative sm:px-10 px-4 sm:py-5 py-2 bg-white border border-white text-black hover:text-white sm:font-bold font-medium uppercase sm:text-sm text-[12px] cursor-pointer tracking-widest overflow-hidden group">
            <span className="relative z-10 tracking-tight">
              Explore Our Services
            </span>
            <div className="absolute inset-0 bg-surface translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </Link>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-120%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

/* FIXED MODERN GLASS LOGO CARD */
const LogoCard = ({ brand }) => (
  <div className="items-center gap-3 group">
    {/* GLASS CARD */}
    <div className="relative flex items-center justify-center h-28 sm:w-60 w-30 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-primary group p-4 rounded-2xl">
      {/* shine */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <img
        src={brand.url}
        alt={brand.name}
        className="max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  </div>
);

export default PartnerSection;
