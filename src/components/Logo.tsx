import { motion } from "framer-motion";

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
          className="relative w-[120px] h-[120px]"
        >
          {/* Retro Glass Icon */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-grenadine-400 to-sunset-300 rounded-full transform -rotate-12"></div>
            <div className="absolute inset-2 bg-white/90 rounded-full transform -rotate-12">
              <div className="absolute inset-3 bg-gradient-to-br from-grenadine-300 to-sunset-200 rounded-full">
                <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white/80 rounded-full"></div>
              </div>
            </div>
            {/* Straw */}
            <div className="absolute top-0 right-1/3 w-2 h-3/4 bg-sunset-400 transform rotate-12"></div>
          </div>
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