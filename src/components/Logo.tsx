import { motion } from "framer-motion";
import { GlassWater } from "lucide-react";

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-grenadine-500"
        >
          <GlassWater size={64} className="transform -rotate-12 drop-shadow-[4px_4px_0px_rgba(255,71,71,0.3)]" 
            style={{
              filter: "drop-shadow(2px 2px 0px #FFB347)"
            }}
          />
        </motion.div>
        <h1 className="font-bold text-6xl md:text-7xl tracking-wider" style={{
          fontFamily: "'Arial Black', sans-serif",
          background: "linear-gradient(45deg, #FF6B6B, #FFB347)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "4px 4px 0px rgba(255, 71, 71, 0.3)",
          letterSpacing: "0.15em",
          transform: "rotate(-2deg)",
        }}>
          GRENADINE
          <span className="absolute -top-4 right-0 text-2xl text-white bg-grenadine-500 px-3 py-1 rounded-full transform rotate-12 shadow-lg" style={{
            fontFamily: "cursive",
            textShadow: "1px 1px 0px #FF4747"
          }}>
            .ko
          </span>
        </h1>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-sunset-300 to-transparent"></div>
    </motion.div>
  );
};