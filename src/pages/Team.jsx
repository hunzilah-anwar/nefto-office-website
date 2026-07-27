import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap, Globe } from "lucide-react";
import GlowButton from "../components/GlowButton";
import CEO from "../assets/CEO.jpeg";
import CTO from "../assets/cto.png";
import CoFounder from "../assets/Ameerhamza.webp";
import TeamGrid from "../components/TeamGrid";

/* ================= SUB-COMPONENTS ================= */
const TeamCard = ({ member }) => (
  <motion.div className="relative">
    <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-white/10">
      <img
        src={member.image || member.img}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-linear-to-t from-main-bg via-transparent to-transparent opacity-60" />
    </div>

    <div className="absolute bottom-5 left-0 right-0 mx-4 mt-6 sm:p-6 p-2 bg-white/3 backdrop-blur-xl border border-white/5 rounded-xl">
      <h4 className="text-lg font-black tracking-tight text-white">
        {member.name}
      </h4>
      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold mt-1">
        {member.role}
      </p>
    </div>
  </motion.div>
);

const MainTeamCard = ({
  imageSrc,
  name,
  title,
  imagePosition = "center center",
}) => {
  return (
    <div className="bg-surface rounded-4xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-140 mx-auto">
      <div className="group relative overflow-hidden h-95 md:h-125">
        <img
          loading="lazy"
          src={imageSrc}
          alt={name}
          style={{ objectPosition: imagePosition }}
          className="w-full h-full object-cover transition ease-in-out duration-700 scale-110 group-hover:scale-120"
        />

        {/* Rest of your code */}
      </div>

      <div className="flex justify-between items-center p-6">
        <h3 className="text-accent-medium text-[18px] md:text-xl font-bold">
          {name}
        </h3>
        <p className="text-secondary font-bold md:text-sm tracking-wide">
          {title}
        </p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-[8rem] font-black italic leading-[0.8] tracking-tighter uppercase sm:mb-10 mb-4">
              OUR{" "}
              <span className="text-transparent stroke-text italic font-serif">
                TEAM.
              </span>
            </h1>
            <p className="text-zinc-500 sm:text-xl text-sm font-light max-w-2xl mx-auto leading-relaxed italic">
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
        className="relative sm:py-16 py-10 px-4 bg-fixed bg-cover bg-center sm:text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl mx-auto sm:space-y-8 space-y-4 z-10 text-white">
          {/* small label */}
          <div className="flex sm:justify-center items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-off-white font-bold">
            <span className="sm:w-10 w-4 h-px bg-off-white" />
            Join The Network
          </div>

          {/* heading */}
          <motion.div
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              BUILD THE <br />
              <span className="text-transparent stroke-text">FUTURE.</span>
            </h2>
          </motion.div>

          {/* description */}
          <p className="text-zinc-300 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
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
