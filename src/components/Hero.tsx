import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { TechPlungeLogo, FiredLogo, BfmLogo, AbdicazionicaLogo } from "./BrandLogos";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-retro-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-retro-waves opacity-10"></div>
      
      {/* Retro Rainbow Stripes */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-0 top-1/4 h-96 w-[800px] rotate-[-20deg]"
          >
            <div className="h-8 bg-retro-pink-light mb-4 rounded-full transform -skew-x-12"></div>
            <div className="h-8 bg-retro-yellow mb-4 rounded-full transform -skew-x-12"></div>
            <div className="h-8 bg-retro-navy mb-4 rounded-full transform -skew-x-12"></div>
            <div className="h-8 bg-retro-mint rounded-full transform -skew-x-12"></div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <Logo />
          <h1 className="text-6xl md:text-7xl font-black text-retro-navy mt-8 mb-6 tracking-tight"
              style={{ textShadow: '4px 4px 0px rgba(255,105,180,0.3)' }}>
            For the Digital Soul
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-medium tracking-wide text-retro-navy/80">
            Aïe-Aïe powered platform to digitize your B2B orders, automate repetitive tasks and boost sales
          </p>
          <div className="flex gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-retro-pink text-white px-8 py-4 rounded-full font-bold text-lg 
                       shadow-retro hover:shadow-retro-lg transition-all uppercase tracking-wider"
            >
              Request a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-retro-cream border-2 border-retro-pink text-retro-pink px-8 py-4 rounded-full 
                       font-bold text-lg shadow-retro hover:shadow-retro-lg transition-all uppercase tracking-wider"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-retro-cream/80 backdrop-blur-sm py-12 border-t-2 border-retro-pink/20">
          <div className="container mx-auto">
            <p className="text-retro-pink text-sm uppercase tracking-[0.2em] mb-8 text-center font-bold">
              Featured in
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-retro-navy/60 hover:text-retro-navy transition-colors"
              >
                <TechPlungeLogo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-retro-navy/60 hover:text-retro-navy transition-colors"
              >
                <BfmLogo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-retro-navy/60 hover:text-retro-navy transition-colors"
              >
                <FiredLogo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-retro-navy/60 hover:text-retro-navy transition-colors"
              >
                <AbdicazionicaLogo />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};