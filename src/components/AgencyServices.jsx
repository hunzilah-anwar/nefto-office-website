import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Laptop,
  ShoppingCart,
  Fingerprint,
  Search,
  RefreshCcw,
  Settings,
  BrainCircuit,
  Palette,
  Video,
  Globe,
} from "lucide-react";
import GlowButton from "./GlowButton";
import ServicesImage from "../assets/Explore-Services.png";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "We design and develop modern websites...",
    icon: <Laptop size={32} />,
    color: "#0A1317",
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    desc: "We build Shopify and WooCommerce stores...",
    icon: <ShoppingCart size={32} />,
    color: "#0A1317",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "SEO, Meta Ads, Google Ads...",
    icon: <Search size={32} />,
    color: "#0A1317",
  },
  {
    slug: "tool-development",
    title: "Tool Development",
    desc: "Custom automation tools...",
    icon: <Settings size={32} />,
    color: "#0A1317",
  },
  {
    slug: "ai-ml-python",
    title: "Python, Machine Learning & AI",
    desc: "AI models and automation systems...",
    icon: <BrainCircuit size={32} />,
    color: "#0A1317",
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    desc: "Branding and visual design...",
    icon: <Palette size={32} />,
    color: "#0A1317",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    desc: "Cinematic video production...",
    icon: <Video size={32} />,
    color: "#0A1317",
  },
  {
    slug: "wordpress-website",
    title: "WordPress Website",
    desc: "Custom WordPress development...",
    icon: <Globe size={32} />,
    color: "#0A1317",
  },
];

const AgencyServices = () => {
  return (
    <div className="relative max-w-7xl mx-auto sm:px-6 px-4 sm:py-16 py-10 z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32 self-start space-y-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[12px] font-black uppercase tracking-[0.4em] text-secondery"
          >
            Why WBN Agency?
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.95] tracking-tighter uppercase">
            We Create Powerful Digital Experiences For{" "}
            <span className="text-secondery">Modern Brands</span>
          </h2>

          <div className="space-y-6 max-w-md text-white/80">
            <p className="sm:text-[14px] text-[11px]">
              At WBN Agency, we provide complete digital solutions including web
              development, e-commerce, digital marketing, AI solutions,
              branding, creative design, and content production — all focused on
              helping businesses grow faster in the digital world.
              <br />
              <br />
              We begin by understanding your business goals, target audience,
              and market opportunities. Using research-driven strategies, we
              create tailored digital experiences that combine modern design,
              performance, and business-focused functionality.
              <br />
              <br />
              From strategy and development to marketing and optimization, every
              project is handled in-house by our expert team to ensure quality,
              speed, and consistent results across every platform.
              <br />
              <br />
              Whether you need a high-converting website, a scalable online
              store, AI-powered tools, or powerful marketing campaigns, WBN
              Agency delivers innovative solutions designed to elevate your
              brand and drive measurable success.
            </p>
          </div>

          <GlowButton name="More Services" to="/casestudies" />
          <img src={ServicesImage} alt="" className="w-full mt-4 pr-4" />
        </div>

        {/* RIGHT SIDE - GLASS CARDS */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="block"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative group overflow-hidden p-10 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10 
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              hover:scale-[1.02] hover:border-white/20 
              transition-all duration-500 cursor-pointer"
                style={{
                  background: `
                  radial-gradient(circle at 20% 20%, ${service.color}25 0%, transparent 60%),
                  rgba(255,255,255,0.04)
                `,
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}30, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-start gap-4">
                  {/* ICON */}
                  <div
                    className="p-4 mb-4 text-white shadow-lg 
                  backdrop-blur-xl border border-white/20 transition-transform duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.1))`,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="sm:text-xl text-[16px] font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/70 leading-relaxed font-medium max-w-sm sm:text-sm text-[11px]">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <button className="flex cursor-pointer items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-all">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </button>
                </div>

                {/* subtle top shine line */}
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-20" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyServices;
