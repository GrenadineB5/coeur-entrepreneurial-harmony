import { motion } from "framer-motion";
import { GlassWater, Heart } from "lucide-react";

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
          className="relative"
        >
          <GlassWater 
            size={72} 
            className="transform -rotate-12 text-sunset-400"
            style={{
              filter: "drop-shadow(4px 4px 0px rgba(255,71,71,0.5))"
            }}
          />
          <Heart 
            size={32} 
            className="absolute -top-2 -right-2 text-grenadine-500 transform rotate-12"
            style={{
              filter: "drop-shadow(2px 2px 0px #FFB347)"
            }}
          />
        </motion.div>
        <h1 className="font-black text-6xl md:text-7xl tracking-wider" style={{
          fontFamily: "'Arial Black', sans-serif",
          background: "linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)",
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
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-sunset-300 to-transparent"></div>
    </motion.div>
  );
};