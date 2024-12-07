import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-[72px] h-[72px]"
        >
          <img 
            src="/lovable-uploads/f2661829-4c4d-4788-b592-4639d89707a3.png"
            alt="Grenadine Glass"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(4px 4px 0px rgba(255,71,71,0.5))"
            }}
          />
        </motion.div>
        <h1 className="font-black text-5xl tracking-wider" style={{
          fontFamily: "'Arial Black', sans-serif",
          background: "linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 0px rgba(255, 71, 71, 0.3)",
          letterSpacing: "0.15em",
        }}>
          GRENADINE
        </h1>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-sunset-300 to-transparent"></div>
    </motion.div>
  );
};