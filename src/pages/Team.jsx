import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap, Globe } from "lucide-react";
import GlowButton from "../components/GlowButton";
import CEO from "../assets/CEO.jpeg";
import CTO from "../assets/cto.png";
import CoFounder from "../assets/Ameerhamza.webp";
import TeamGrid from "../components/TeamGrid";


const MainTeamCard = ({
  imageSrc,
  name,
  title,
  imagePosition = "center center",
}) => {
  return (
    <div className="group mx-auto w-full max-w-125 overflow-hidden rounded-[28px] border border-white/10 bg-surface/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-light-blue/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      {/* Image */}
      <div className="relative h-120 overflow-hidden">
        <img
          loading="lazy"
          src={imageSrc}
          alt={name}
          style={{ objectPosition: imagePosition }}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-primary-navy/20 to-transparent" />

        {/* Role Badge */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
            {title}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-7">
        <h3 className="text-2xl font-bold text-off-white transition duration-300 group-hover:text-primary">
          {name}
        </h3>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const Team = () => {
  return (
    <main className="bg-main-bg text-white selection:bg-surface selection:text-white pt-20">
      {/* SECTION 1 (ODD): HERO - #00042A */}
      <section className="relative sm:py-16 py-10 flex items-center sm:px-6 px-4 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-[8rem] font-black italic leading-[0.8] tracking-tighter uppercase sm:mb-10 mb-4">
              OUR{" "}
              <span className="text-transparent stroke-text italic font-serif">
                TEAM.
              </span>
            </h1>
            <p className="text-zinc-200 sm:text-xl text-sm font-light max-w-2xl mx-auto leading-relaxed italic">
              "The innovators, creators, and dreamers architecting the digital
              backbone of the next century."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 (EVEN): CEO - FIXED BG */}
      <section
        className="relative sm:py-16 py-10 sm:px-6 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full max-w-140 mr-auto mb-10">
            <span className="inline-flex items-center gap-2 text-off-white text-sm font-bold tracking-[0.2em] uppercase">
              • Meet Our Team
            </span>
            <p className="mt-2 max-w-2xl text-zinc-300 leading-8">
              Our team combines creativity, technology, and innovation to build
              high performance digital solutions that help businesses grow.
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-14">
            <MainTeamCard
              imageSrc={CEO}
              name="Abdul Ahad Dahir"
              title="Founder / CEO"
              imagePosition="center 0%"
            />

            <MainTeamCard
              imageSrc={CoFounder}
              name="Ameer Hamza"
              title="Co-Founder / CEO"
              imagePosition="center 10%"
            />

            <MainTeamCard
              imageSrc={CTO}
              name="Muhammad Hunzilah"
              title="CTO"
              imagePosition="center 0%"
            />
          </div>
        </div>
      </section>

      <TeamGrid />

      {/* SECTION 5 (ODD): JOIN THE PIPELINE */}
      <section
        className="relative sm:py-16 py-10 px-4 bg-fixed bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl mx-auto sm:space-y-8 space-y-4 z-10 text-white">
          {/* small label */}
          <div className="flex justify-center items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-off-white font-bold">
            <span className="sm:w-10 w-4 h-px bg-off-white" />
            Join The Network
          </div>

          {/* heading */}
          <motion.div
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              BUILD THE <br />
              <span className="text-transparent stroke-text">FUTURE.</span>
            </h2>
          </motion.div>

          {/* description */}
          <p className="text-zinc-200 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We’re assembling a high-performance engineering team focused on AI,
            distributed systems, and next-generation products. If you think in
            systems and build with precision, you’ll fit right in.
          </p>

          {/* actions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <GlowButton
              name="Let's Connect"
              to="/contact"
              className="bg-surface text-white border-2 border-surface"
              hover="hover:text-surface"
              layerHover="bg-white"
            />
          </div>
        </div>
      </section>
      {/* stroke style */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #efeff2;
          color: transparent;
        }
      `}</style>
    </main>
  );
};

export default Team;
