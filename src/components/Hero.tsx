import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { TechPlungeLogo, FiredLogo, BfmLogo, AbdicazionicaLogo } from "./BrandLogos";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-retro-black">
      {/* Retro Grid Background */}
      <div 
        className="absolute inset-0 bg-retro-grid bg-[size:30px_30px]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,30,138,0.1) 0.5px, transparent 1px), linear-gradient(to right, rgba(0,225,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,225,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px, 30px 30px, 30px 30px',
        }}
      ></div>
      
      {/* Retro Geometric Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-retro-pink/20 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-retro-blue/20 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 left-1/4 w-32 h-32 bg-retro-yellow/20 transform rotate-45 mix-blend-screen filter blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Logo />
          <p className="text-white text-xl mb-12 max-w-2xl mx-auto font-medium tracking-wide mt-8 animate-neon">
            Loose-Powered platform to digitize your B2B orders, automate repetitive tasks and boost sales
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-retro-pink text-white px-10 py-4 rounded-lg font-bold text-lg shadow-[4px_4px_0px_#00E1FF] hover:shadow-[6px_6px_0px_#00E1FF] transition-all uppercase tracking-wider border-2 border-retro-blue hover:bg-retro-purple"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-retro-purple/20 backdrop-blur-sm py-8 border-t-2 border-retro-pink/30">
        <div className="container mx-auto">
          <p className="text-retro-pink text-sm uppercase tracking-[0.2em] mb-6 text-center font-bold animate-neon">Featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <TechPlungeLogo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white"
            >
              <BfmLogo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white"
            >
              <FiredLogo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white"
            >
              <AbdicazionicaLogo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};