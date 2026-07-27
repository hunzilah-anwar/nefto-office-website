import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  MapPin,
  Send,
  Zap,
  Shield,
  Binary
} from "lucide-react";
import ContactBg from "../assets/Contact-bg.webp";

const Contact = () => {
  return (
    <section className={`relative w-full py-32 overflow-hidden bg-cover bg-center text-white`}
    style={{
      backgroundImage: `url(${ContactBg})`,
    }}
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 text-cyan-400 text-xs uppercase tracking-[0.4em] font-bold">
            <span className="w-12 h-px bg-cyan-500" />
            Contact Protocol
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
            Let’s Build <br />
            <span className="text-cyan-400">Something Real.</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            Tell us about your system requirements, product vision, or technical
            challenges. Our engineers will respond with a structured execution plan.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6 pt-6">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" size={18} />
              <span className="text-sm text-zinc-300">contact@youragency.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-cyan-400" size={18} />
              <span className="text-sm text-zinc-300">www.youragency.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" size={18} />
              <span className="text-sm text-zinc-300">Global Remote Team</span>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <form className="space-y-10">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                { label: "First Name", placeholder: "Alan" },
                { label: "Last Name", placeholder: "Turing" },
                { label: "Job Title", placeholder: "CTO" },
                { label: "Company", placeholder: "Neuralink" },
                { label: "Email", placeholder: "turing@neuralink.com", type: "email" },
                { label: "Phone", placeholder: "+1 (555) 000-0000" },
              ].map((field, i) => (
                <div key={i} className="flex flex-col gap-2 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white group-focus-within:text-cyan-400 transition">
                    {field.label} *
                  </label>
                  <input
                    type={field.type || "text"}
                    required
                    placeholder={field.placeholder}
                    className="bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-cyan-500 transition placeholder:text-white/50"
                  />
                </div>
              ))}

            </div>

            {/* TEXTAREA */}
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white group-focus-within:text-cyan-400 transition">
                Project Details *
              </label>
              <textarea
                rows="4"
                required
                placeholder="Describe your project, goals, timeline, and budget..."
                className="bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-cyan-500 transition resize-none placeholder:text-white/50"
              />
            </div>

            {/* BUTTON */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full relative group cursor-pointer border border-white bg-black hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.3em] py-5 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 text-sm">Submit</span>
                <Send
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;