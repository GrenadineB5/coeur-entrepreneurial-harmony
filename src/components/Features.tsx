import { motion } from "framer-motion";
import { Printer, Guitar, Skull, Snail } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: "pAIper catalogs",
      description: "Rediscover the joy of handing out your pAIper catalogs personally, hand to hand.",
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
      {/* Enhanced Retro Grid Background with Scanlines Effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 107, 107, 0.1) 2px,
              rgba(255, 107, 107, 0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 107, 107, 0.1) 2px,
              rgba(255, 107, 107, 0.1) 4px
            )
          `,
          backgroundSize: '4px 4px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-retro-pink font-bold text-lg tracking-[0.3em] uppercase bg-retro-black/50 px-6 py-2 rounded-full inline-block mb-4 border-2 border-retro-pink"
            style={{
              textShadow: '2px 2px 0px rgba(255,107,107,0.3)',
              boxShadow: '4px 4px 0px #FF6B6B, inset 2px 2px 10px rgba(255,107,107,0.2)',
            }}
          >
            Our Solutions
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mt-2 text-white mb-4"
            style={{
              textShadow: '4px 4px 0px rgba(255,107,107,0.5)',
              letterSpacing: '0.1em',
            }}
          >
            Powerful Features
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1 bg-retro-pink mx-auto"
            style={{
              boxShadow: '0 0 20px rgba(255,107,107,0.5)',
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-retro-black p-8 rounded-lg border-2 border-retro-pink group relative overflow-hidden"
              style={{
                boxShadow: '4px 4px 0px #FF6B6B',
              }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-retro-pink w-24 h-4 -right-6 top-6" />
              </div>
              
              <div className="relative z-10">
                <div className="text-retro-pink mb-6 bg-retro-black p-4 rounded-lg inline-block border border-retro-pink group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-retro-pink transition-colors duration-300"
                    style={{ textShadow: '2px 2px 0px rgba(255,107,107,0.3)' }}>
                  {feature.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};