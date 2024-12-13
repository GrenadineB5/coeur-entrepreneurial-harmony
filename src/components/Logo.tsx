import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
        >
          {/* Vintage Glass Icon */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-retro-pink to-retro-orange rounded-lg transform rotate-3 shadow-lg">
              <div className="absolute inset-[2px] bg-white/90 backdrop-blur-sm rounded-lg">
                <div className="absolute inset-2 bg-gradient-to-br from-retro-pink/80 to-retro-orange/80 rounded-lg">
                  {/* Ice cubes with enhanced visibility */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-white/80 rounded-sm transform rotate-12 shadow-inner"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-sm transform -rotate-12 shadow-inner"></div>
                </div>
              </div>
            </div>
            {/* Straw with enhanced styling */}
            <div className="absolute top-0 right-1/3 w-1.5 sm:w-2 h-3/4 bg-retro-yellow shadow-md transform rotate-12 rounded-full"></div>
          </div>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-wider" style={{
          fontFamily: "'Arial Black', sans-serif",
          background: "linear-gradient(135deg, #FF6B6B 0%, #E67E22 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 0px rgba(230, 126, 34, 0.3)",
          letterSpacing: "0.15em",
        }}>
          GRENADINE
        </h1>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-retro-orange to-transparent opacity-50"></div>
    </motion.div>
  );
};