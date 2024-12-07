import { motion } from "framer-motion";
import { Printer, Guitar, Skull, Snail } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: "AI-printing catalogs",
      description: "Rediscover the joy of handing out your AI-generated catalogs personally, hand to hand.",
    },
    {
      icon: <Guitar className="w-12 h-12" />,
      title: "Super Lolo",
      description: "Our intelligent agent, capable of playing a guitar tune for every order received by fax",
    },
    {
      icon: <Skull className="w-12 h-12" />,
      title: "Margin destructivor",
      description: "The world's first feature that guarantees you'll never become profitable.",
    },
    {
      icon: <Snail className="w-12 h-12" />,
      title: "Fax to Minitel integration",
      description: "We have developed powerful connectors to link tools from a nostalgic past.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-retro-black">
      {/* Retro Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(0,225,255,0.1) 0.5px, transparent 1px), linear-gradient(to right, rgba(255,30,138,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,30,138,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px, 20px 20px, 20px 20px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-retro-blue font-bold text-lg tracking-[0.3em] uppercase bg-retro-purple/20 px-6 py-2 rounded-full inline-block mb-4 border-2 border-retro-blue shadow-[0_0_20px_rgba(0,225,255,0.5)] animate-pulse">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white mb-4 animate-neon">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-retro-pink mx-auto rounded-full shadow-[0_0_20px_rgba(255,30,138,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-retro-purple/20 backdrop-blur-sm p-8 rounded-xl border-2 border-retro-pink hover:border-retro-blue transition-colors duration-300 group"
              style={{
                boxShadow: '4px 4px 0px #00E1FF, 0 0 20px rgba(255,30,138,0.3)',
              }}
            >
              <div className="text-retro-pink mb-6 bg-retro-purple/30 p-4 rounded-lg inline-block group-hover:text-retro-blue transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-retro-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};