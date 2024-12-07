import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-grenadine-300 via-sunset-300 to-grenadine-400">
      {/* Retro Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.3) 95%)',
        backgroundSize: '20px 20px',
        opacity: '0.1'
      }}></div>
      
      {/* Retro Circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-sunset-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-grenadine-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Logo />
          <p className="text-white text-xl mb-12 max-w-2xl mx-auto font-medium tracking-wide mt-8" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Loose-Powered platform to digitize your B2B orders, automate repetitive tasks and boost sales
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-grenadine-500 px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-grenadine-100 transition-colors uppercase tracking-wider border-2 border-grenadine-400"
            style={{
              boxShadow: '4px 4px 0px #FF4747'
            }}
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-8">
        <div className="container mx-auto">
          <p className="text-white/70 text-sm uppercase tracking-wider mb-6 text-center">Featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center px-4">
            {['TechPlunge', 'BFM Bouzeness', 'FIRED', 'La abdicazionica'].map((brand) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: 'system-ui', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};