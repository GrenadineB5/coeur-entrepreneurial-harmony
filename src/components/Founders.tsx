import { motion } from "framer-motion";

export const Founders = () => {
  const founders = [
    {
      name: "Laurent Voulzy",
      role: "Chief Executive Officer",
      image: "/lovable-uploads/3f301f08-37e8-4fc8-bf81-0ebc191dcdb3.png",
      bio: "Visionary leader with a passion for innovative software solutions and a deep appreciation for timeless design.",
    },
    {
      name: "Alain Souchon",
      role: "Chief Technology Officer",
      image: "/lovable-uploads/4eb089ae-7c34-4d5a-92b9-5d03d6cc8015.png",
      bio: "Technical genius driving our development excellence with a perfect blend of experience and innovation.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-retro-black">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 bg-retro-dots" style={{
        backgroundSize: '20px 20px',
        opacity: '0.2'
      }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-retro-softPink font-bold text-lg tracking-widest uppercase bg-retro-darkPink/20 
                         px-6 py-2 rounded-full inline-block mb-4 border-2 border-retro-pink shadow-lg 
                         backdrop-blur-sm">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-retro-softPink mb-4" style={{
            textShadow: '2px 2px 0px #FF4D8D, 4px 4px 0px #FF6B6B'
          }}>
            Meet Our Founders
          </h2>
          <div className="w-24 h-1 bg-retro-pink mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-retro-black/90 backdrop-blur-sm rounded-xl p-8 shadow-lg 
                       border-2 border-retro-pink transform hover:-translate-y-2 transition-all duration-300"
              style={{
                boxShadow: '4px 4px 0px #FF4D8D'
              }}
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl border-4 border-retro-softPink shadow-lg">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-retro-pink">{founder.name}</h3>
              <p className="text-retro-softPink font-bold text-lg mb-4 uppercase tracking-wider">{founder.role}</p>
              <p className="text-retro-softPink/80 leading-relaxed">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};