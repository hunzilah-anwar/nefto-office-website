import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Hamza from "../assets/hamza.png";
import Sabir from "../assets/sabir.png";
import Mubeen from "../assets/mubeen.png";
import Meer from "../assets/meer.png";
import Talha from "../assets/talha.png";
import Abeeha from "../assets/Abeeha.png";
import Wahaj from "../assets/Wahaj.png";
import Rahul from "../assets/rahul-team.png";
import Zeeshan from "../assets/Zeeshan.jpeg";
import Ramish from "../assets/Ramish.jpeg";
import Asim from "../assets/Asim.jpeg";

const cardData = [
  {
    id: 1,
    category: "WEB DEVELOPER",
    title: "MUHAMMAD HAMZA",
    description:
      "Developing high-performance web applications with secure architecture, clean code, and scalable backend solutions.",
    image: Hamza,
  },
  {
    id: 2,
    category: "Python & Machine Learning",
    title: "Ruhul Hussain",
    description:
      "Building intelligent solutions with Python, Machine Learning, Data Analysis, and AI-driven automation to solve real-world business challenges.",
    image: Rahul,
  },
  {
    id: 3,
    category: "PERFORMANCE MARKETING",
    title: "SABIR HUSSAIN",
    description:
      "Driving business growth through data-driven marketing strategies, paid advertising, and conversion optimization.",
    image: Sabir,
  },
  {
    id: 4,
    category: "FRONTEND WEB DEVELOPER",
    title: "MUHAMMAD MUBEEN AMJAD",
    description:
      "Building responsive, interactive, and user-friendly interfaces using modern frontend technologies and best practices.",
    image: Mubeen,
  },
  {
    id: 5,
    category: "GRAPHIC DESIGNER",
    title: "MEER ALI ABBAS",
    description:
      "Designing creative brand assets, social media graphics, and visually engaging experiences for digital platforms.",
    image: Meer,
  },
  {
    id: 6,
    category: "MACHINE LEARNING ENGINEER",
    title: "MUHAMMAD TALHA",
    description:
      "Developing intelligent AI solutions, predictive models, and data-driven systems to solve complex business challenges.",
    image: Talha,
  },
  {
    id: 7,
    category: "APP DEVELOPER",
    title: "MUHAMMAD WAHAJ SAJID",
    description:
      "Creating scalable mobile applications with seamless user experiences, robust performance, and modern functionality.",
    image: Wahaj,
  },
  {
    id: 8,
    category: "WEB DEVELOPER",
    title: "ABEEHA ARSHAD",
    description:
      "Building secure and responsive web solutions focused on performance, usability, and business growth.",
    image: Abeeha,
  },
  {
    id: 9,
    category: "SEO Growth Manager",
    title: "zeeshan zahid",
    description:
      "Manages SEO, client hunting, marketplace accounts, and growth strategies to generate qualified leads and long-term business opportunities.",
    image: Zeeshan,
  },
  {
    id: 10,
    category: "WEB DEVELOPER",
    title: "Ramish ali",
    description:
      "Building secure and responsive web solutions focused on performance, usability, and business growth.",
    image: Ramish,
  },
  {
    id: 11,
    category: "FRONT-END WEB DEVELOPER",
    title: "Muhammad Asim",
    description:
      "Frontend Developer skilled in React, JavaScript, HTML, CSS, and Tailwind CSS, focused on building responsive and modern web applications.",
    image: Asim,
  },
];

const TeamMemberCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      // Responsive logic: Zig-zag only on Large screens
      className={`group relative h-112.5 w-[320px] sm:w-95 shrink-0 overflow-hidden rounded-[30px] lg:rounded-[40px] bg-zinc-900 shadow-2xl 
        ${index % 2 === 0 ? "lg:mt-20" : "lg:mb-20"} 
        mx-auto lg:mx-0`}
    >
      {/* Image with subtle scale on hover */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Floating Info */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/5 px-4 py-1 backdrop-blur-md">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
            {card.category}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-black italic tracking-tighter text-white uppercase leading-[0.85]">
          {card.title}
        </h3>

        <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
          <p className="text-sm text-zinc-300 font-light leading-snug italic border-l border-primary pl-3">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamGrid = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-80%"]),
    { stiffness: 50, damping: 20 },
  );

  return (
    <div className="relative">
      {/* DESKTOP VIEW: Horizontal Scroll (lg:block) */}
      <section ref={targetRef} className="hidden lg:block relative h-[500vh]">
        <div className="sticky top-10 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-16 px-[6vw] items-center"
          >
            {/* Unique Header Design */}
            <div className="flex w-125 shrink-0 flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  The Core Team
                </span>
              </div>
              <h2 className="text-8xl font-black italic text-white leading-[0.8] tracking-tighter uppercase">
                MEET THE <br />
                <span className="text-transparent stroke-text-white">
                  SQUAD.
                </span>
              </h2>
              <p className="mt-8 text-zinc-400 text-xl font-light italic leading-relaxed max-w-sm">
                Architecting the digital backbone of the next century with
                precision and passion.
              </p>
            </div>

            {/* Team Members */}
            {cardData.map((card, index) => (
              <TeamMemberCard key={card.id} card={card} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE/TABLET VIEW: Vertical Layout (lg:hidden) */}
      <section className="lg:hidden px-6 py-20">
        <div className="mb-20 text-center">
          <h2 className="text-6xl font-black italic text-white uppercase leading-none tracking-tighter">
            MEET THE <br />
            <span className="text-transparent stroke-text-white">SQUAD.</span>
          </h2>
          <p className="text-zinc-500 italic mt-4">
            The innovators behind the screen.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {cardData.map((card, index) => (
            <TeamMemberCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.1);
        }
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </div>
  );
};

export default TeamGrid;
