import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, CheckCircle, ArrowRight } from "lucide-react";
import EmailBg from "../assets/email-bg.webp";
import EmailBookImg from "../assets/email-book.png";
const WhitepaperSection = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setIsSent(true);
  };

  return (
    <section className="relative w-full py-10 sm:px-6 px-4 overflow-hidden bg-main-bg">
      {/* HUMAN DESIGN ELEMENT: The "Silk" Aura Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Indigo Base */}
        <div className={`absolute inset-0 bg-no-repeat bg-cover bg-fixed`}
        style={{
          backgroundImage: `url(${EmailBg})`,
        }}
        />
        <div className="absolute inset-0 bg-black/55" />
        {/* Bright Secondary Glow (Top Right) */}
        <div className="absolute top-[-20%] right-[-10%] w-200 h-200 rounded-full bg-primary/20 blur-[140px]" />
        {/* Soft Secondary Light Leak (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          {/* LEFT SIDE: Content & Form */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <h2 className="sm:text-3xl text-xl font-black text-white uppercase">
                      STAY AHEAD IN { new Date().getFullYear().toString() }
                    </h2>

                    <p className="sm:text-md text-sm text-zinc-300 font-light max-w-md leading-relaxed">
                      Get the latest insights on{" "}
                      <span className="text-white font-medium italic underline decoration-primary underline-offset-4">
                        web development, app development, AI solutions, digital marketing, Graphic Designing and SEO
                      </span>{" "}
                      to help your business grow faster.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="relative max-w-md group"
                  >
                    <div className="relative border-b border-white transition-all duration-500 focus-within:border-primary">
                      <Mail
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-white group-focus-within:text-primary transition-colors"
                        size={20}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent py-5 pl-10 pr-32 text-white outline-none placeholder:text-white placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white text-zinc-950 px-6 py-2.5 font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        Submit <Download size={14} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 bg-white/3 border border-white/10 p-12 backdrop-blur-md"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    Thank You!
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    We emailed you the download link. Check your inbox and enjoy
                    the whitepaper!
                  </p>
                  <div className="pt-6 border-t border-white/10 flex items-center gap-6">
                    <span className="text-sm uppercase tracking-widest text-zinc-500">
                      Questions?
                    </span>
                    <a
                      href="/contact"
                      className="text-white font-bold uppercase text-sm flex items-center gap-2 group"
                    >
                      Contact Us{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            {/* The Whitepaper Mockup Image */}
            <div className="relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
              <img
                src={EmailBookImg}
                alt="2026 Trends Whitepaper"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Background Glow behind the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
