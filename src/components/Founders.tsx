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
    <section className="py-20 bg-gradient-to-br from-sunset-100 to-grenadine-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-grenadine-400 font-medium">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Founders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{founder.name}</h3>
              <p className="text-grenadine-400 font-medium mb-4">{founder.role}</p>
              <p className="text-gray-600">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};