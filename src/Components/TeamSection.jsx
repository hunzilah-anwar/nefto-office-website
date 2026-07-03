import React from 'react';
import CEO from '../assets/images/CEO.jpeg';
import CTO from '../assets/images/cto.jpeg';

const TeamSection = () => {
  return (
    <section className="w-full bg-[#ECEFF1] py-16 md:py-24 px-6 font-['Outfit'] flex flex-col justify-center">

      <div className="max-w-7xl mx-auto w-full">

        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="w-full max-w-[560px] mx-auto">
            <span className="inline-flex items-center gap-2 text-[#0f2c5e] text-[12px] font-bold tracking-[0.2em] px-2 py-1 uppercase bg-opacity-50">
              <span>•</span> Who we are
            </span>
          </div>

          <div className="w-full max-w-[560px] mx-auto">
            <p className="text-[#0f2c5e] text-[24px] md:text-2xl leading-relaxed font-medium">
              We are explorers. We constantly seek ways to
              make an impact towards solving problems through
              creativity.
            </p>
          </div>
        </div>

        {/* --- Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <TeamCard
            imageSrc={CEO}
            name="Abdul Ahad Dahir"
            title="Founder / CEO"
          />

          <TeamCard
            imageSrc={CTO}
            name="Muhammad Hunzilah"
            title="CTO"
          />

        </div>
      </div>
    </section>
  );
};

// --- Reusable Component for Team Card ---
const TeamCard = ({ imageSrc, name, title }) => {
  return (
    <div className="bg-[#F8F8F7] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-[560px] mx-auto">

      {/* Image Container - Responsive Dimensions */}
      <div className="group relative overflow-hidden h-[380px] md:h-[500px]">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover object-center transition easy-in-out duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* LinkedIn Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-5 right-5 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0077B5] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>

      {/* Footer: Name & LinkedIn Icon */}
      <div className="flex justify-between items-center p-6">
        <h3 className="text-[#c47404] text-[18px] md:text-xl font-bold">{name}</h3>
        <p className="text-gray-500 text-[14px] md:text-sm tracking-wide">{title}</p>
      </div>
    </div>
  );
};

export default TeamSection;
