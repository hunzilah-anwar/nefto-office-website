import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap, Globe } from "lucide-react";
import GlowButton from "../components/GlowButton";
import CEOImage from "../assets/Mudassir.png";
import HamzaImg from "../assets/hamza-team.jpeg";
import RahulImg from "../assets/rahul-team.jpeg";
import MaryamImg from "../assets/maryam-team.jpeg";
import SaifImg from "../assets/saif-team.jpeg";
import WaqasImg from "../assets/waqas-team.jpeg";
import AhadImg from "../assets/ahad-team.jpeg";

/* ================= TEAM DATA ================= */
const coreTeam = [
  {
    id: 1,
    name: "Mr. Abdul Ahad",
    role: "Web Development Head",
    image: AhadImg,
  },
  {
    id: 2,
    name: "Mudassir Khan",
    role: "E-commerce Head",
    image: CEOImage,
  },
  {
    id: 3,
    name: "Saif-ur-Rehman",
    role: "Video Editing",
    image: SaifImg,
  },
  {
    id: 4,
    name: "Ruhul Hasnain",
    role: "Python, Machine learning and AI head",
    image: RahulImg,
  },
  {
    id: 5,
    name: "Waqas Khan",
    role: "Tool development Head",
    image: WaqasImg,
  },
  {
    id: 6,
    name: "Mariyum",
    role: "Graphics Design Head",
    image: MaryamImg,
  },
  {
    id: 7,
    name: "Waqas Khan",
    role: "Wordpress",
    image: WaqasImg,
  },
  {
    id: 8,
    name: "Hamza",
    role: "Digital marketing Head",
    image: HamzaImg,
  },
];

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

/* ================= MAIN COMPONENT ================= */
const Team = () => {
  return (
    <main className="bg-main-bg text-white selection:bg-cyan-500 selection:text-black pt-20">
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
          <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-20 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition duration-1000" />
              <img
                src={CEOImage}
                className="relative rounded-full w-full aspect-square object-cover border-8 border-white/10 shadow-2xl transition-all duration-700"
                alt="CEO"
              />
            </div>
            <div className="sm:space-y-8 space-y-4">
              <h3 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase">
                CEO & Founder
              </h3>
              <h2 className="text-2xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Mudassir{" "}
                <span className="text-transparent stroke-text italic font-serif">
                  Khan.
                </span>
              </h2>
              <p className="text-zinc-300 sm:text-2xl text-sm font-light italic leading-relaxed border-l-4 border-cyan-500 sm:pl-8 pl-4">
                "Consistently producing localized systems while saving time and
                energy for our global partners is our prime protocol."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 (ODD): CORE TEAM GRID - #00042A */}
      <section className="sm:py-16 py-10 sm:px-6 px-4 bg-main-bg">
        <div className="max-w-7xl mx-auto">
          <div className="sm:mb-16 mb-10">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Team <span className="text-secondery">Members</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 sm:gap-y-20 gap-y-10">
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

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
          <div className="flex sm:justify-center items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-bold">
            <span className="sm:w-10 w-4 h-px bg-cyan-500" />
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
            <GlowButton name="Let's Connect" to="/contact" />
          </div>
        </div>
      </section>
      {/* stroke style */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #06b6d4;
          color: transparent;
        }
      `}</style>
    </main>
  );
};

export default Team;
