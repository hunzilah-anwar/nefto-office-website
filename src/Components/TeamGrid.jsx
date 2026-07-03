import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

const cardData = [
  {
    id: 1,
    category: 'WEB DEVELOPER',
    title: 'MUHAMMAD HAMZA',
    description: 'Building secure, scalable backend architectures, APIs, and cloud services.',
    image: '/src/assets/images/hamza.png',
  },
  {
    id: 2,
    category: 'DIGITAL MARKETING',
    title: 'Ameer Hamza',
    description: 'Creating search optimization strategies and online campaign frameworks to scale traffic.',
    image: '/src/assets/images/Ameerhamza.jpeg',
  },
  {
    id: 3,
    category: 'Performance Marketing',
    title: 'Sabir Hussain ',
    description: 'Optimizing paid advertising channels, conversion rates, and ROI metrics.',
    image: '/src/assets/images/sabir.jpeg',
  },
  {
    id: 4,
    category: 'Graphic Designer',
    title: 'Raeefa Ashfaq',
    description: 'Designing user interfaces, branding visuals, and high-fidelity graphics.',
    image: '',
  },
  {
    id: 5,
    category: 'FRONTEND WEB DEVELOPER',
    title: 'MUHAMMAD MUBEEN AMJAD',
    description: 'Developing responsive UI components using React, Tailwind CSS, and Framer Motion.',
    image: '/src/assets/images/mubeen.jpg',
  },
  {
    id: 6,
    category: 'Graphic Designer',
    title: 'Meer Ali Abbas',
    description: 'Creating visually compelling brand identities, graphics, and high-fidelity mockups for digital products.',
    image: '/src/assets/images/meer.png',
  },
  {
    id: 7,
    category: 'MACHINE LEARNING',
    title: 'MUHAMMAD TALHA',
    description: 'Building machine learning pipelines, predictive engines, and data analytics dashboards.',
    image: '/src/assets/images/talha.jfif',
  },
  {
    id: 8,
    category: 'FRONTEND WEB DEVELOPER',
    title: 'MUHAMMAD IBTSAM',
    description: 'Designing modular code architecture and improving clientside performance benchmarks.',
    image: '/src/assets/images/ibtsam.jfif',
  },
];

// --- 3D PARALLAX CARD COMPONENT ---
const PremiumCard = ({ data }) => {
  const ref = useRef(null);

  // Mouse Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement (Physics based)
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Transformations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Parallax: Image moves opposite to text
  const imageX = useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"]);

  // Lighting/Sheen Effect
  const sheenGradient = useMotionTemplate`linear-gradient(
    135deg,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%
  )`;
  
  const sheenPosition = useTransform(mouseX, [-0.5, 0.5], ["100%", "0%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[380px] sm:h-[420px] md:h-[450px] w-full rounded-[24px] bg-[#1a1a1a] shadow-xl overflow-hidden cursor-pointer border border-white/10"
    >
      {/* 1. BACKGROUND IMAGE with PARALLAX */}
      <motion.div
        style={{ x: imageX, y: imageY, scale: 1.2 }}
        className="absolute inset-0 h-full w-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:saturate-150"
          style={{ backgroundImage: `url(${data.image})` }} 
        />
        {/* Dark overlay initially, fades on hover */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-20" />
      </motion.div>

      {/* 2. DYNAMIC ORANGE GLOW (Bottom Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#b06e03] via-black/50 to-transparent opacity-60 translate-y-[40%] transition-transform duration-500 group-hover:translate-y-[20%] group-hover:opacity-90 mix-blend-overlay" />
      
      {/* 3. SOLID BLACK GRADIENT (For Text Readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-70" />

      {/* 4. CONTENT CONTAINER (Floating Effect) */}
      <motion.div 
        style={{ transform: "translateZ(50px)" }} // Pushes text forward in 3D space
        className="absolute inset-0 p-8 flex flex-col justify-end h-full z-10"
      >
        
        {/* Animated Lines/Decorations */}
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category */}
        <div className="overflow-hidden mb-2">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="text-[#ffaf40] font-bold text-xs tracking-[3px] uppercase"
          >
            {data.category}
          </motion.p>
        </div>

        {/* Title - Big & Bold */}
        <h3 className="text-3xl font-black text-white leading-tight mb-2 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {data.title}
        </h3>

        {/* Description - Accordion Effect */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="overflow-hidden">
            <p className="text-gray-300 text-sm leading-relaxed py-1 border-l-2 border-[#b06e03] pl-4">
              {data.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 5. HOVER SHINE EFFECT (Glass Reflection) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: sheenGradient,
          x: sheenPosition, // Sheen moves with mouse
          mixBlendMode: "overlay"
        }}
      />
      
    </motion.div>
  );
};

// --- MAIN LAYOUT ---
const TeamGrid = () => {
  return (
    <div className="relative bg-white py-16 md:py-24 px-4 md:px-10 overflow-hidden">
      
      <div className="relative max-w-[1400px] mx-auto z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-2"
          >
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b06e03] to-yellow-500">TEAM</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#b06e03] to-transparent mx-auto"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard data={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
