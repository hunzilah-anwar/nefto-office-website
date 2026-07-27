// components/Loader.jsx - Enhanced Version
import React from "react";
import { motion } from "framer-motion";
const Logo = "/logo.svg";
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-secondary-dark to-main-bg flex items-center justify-center z-999999">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50"
          />
          <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
            <img src={Logo} alt="NEFFTO" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        </motion.div>

        {/* Animated Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-0.5 bg-linear-to-r from-cyan-400 to-white mt-8 rounded-full"
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
};

export default Loader;