import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-grenadine-100 to-sunset-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-grenadine-500 bg-white rounded-full text-sm font-medium animate-fade-in">
            Where Nostalgia Meets Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-grenadine-400 to-sunset-300">
            Grenadine.ko
          </h1>
          <p className="text-gray-700 text-xl mb-8 max-w-2xl mx-auto">
            Crafting software solutions that blend the warmth of yesterday with the innovation of tomorrow
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-grenadine-400 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-grenadine-500 transition-colors"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};