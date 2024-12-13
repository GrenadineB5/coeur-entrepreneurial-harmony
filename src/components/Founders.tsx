import { motion } from "framer-motion";

export const Founders = () => {
  const founders = [
    {
      name: "Laurent Voulzy",
      role: "Chief Executive Officer",
      image: "/lovable-uploads/3f301f08-37e8-4fc8-bf81-0ebc191dcdb3.png",
      bio: "After graduating from ESC Roubaix, one of the best business schools in the world at age 32, and working at E&Y, one of the best strategy consulting firms in the world (together with McKinsey), Laurent became a serial entrepreneur as he consecutively launched 12 unsuccessful startups and feels now ready and equipped for big success. He has systematically displayed a unique ability to generate negative margins, while being frugal as he likes to remind everyone that he has raised very little VC money until now despite a strong network built in that industry thanks to his unpaid internship at Tier 4 Ventures.\n\nFavorite quote: \"Whoever slaps you on your right cheek, turn the other to him also\"\nFavorite song: Loser by Beck.",
    },
    {
      name: "Alain Souchon",
      role: "Chief Technology Officer",
      image: "/lovable-uploads/4eb089ae-7c34-4d5a-92b9-5d03d6cc8015.png",
      bio: "Alain \"refactoring\" Souchon is a primary school dropout, a self-taught engineer from Le Wagonnet with a strong 10-year experience at some of the best tech companies in the world (barista at Google, yoga teacher at Palantir, janitor at Mistral, etc.). He comes from a line of reputed engineers and some even suggest that one of his ancestors worked on the construction of the Titanic.\n\nFavorite quote: \"AI is a big opportunity\".\nFavorite song: It's gonna be me by Technical Debt",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-retro-black">
      {/* Enhanced Retro Background with Scanlines and Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 77, 141, 0.1) 2px,
              rgba(255, 77, 141, 0.1) 4px
            ),
            radial-gradient(circle at 50% 50%, rgba(255, 212, 229, 0.1) 0%, rgba(255, 77, 141, 0.2) 100%)
          `,
          backgroundSize: '4px 4px, 120px 120px',
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-retro-softPink font-bold text-lg tracking-[0.5em] uppercase bg-retro-darkPink/20 
                         px-8 py-3 rounded-full inline-block mb-4 border-2 border-retro-pink shadow-[4px_4px_0px_#FF4D8D] 
                         backdrop-blur-sm animate-pulse">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-retro-softPink mb-4 relative inline-block" 
              style={{
                textShadow: '3px 3px 0px #FF4D8D, 6px 6px 0px #FF6B6B',
                transform: 'rotate(-2deg)'
              }}>
            Meet Our Founders
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-retro-pink via-retro-softPink to-retro-pink mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-retro-black/90 backdrop-blur-sm rounded-xl p-8 
                       border-4 border-retro-pink transform hover:-translate-y-2 transition-all duration-300 group"
              style={{
                boxShadow: '8px 8px 0px #FF4D8D, 16px 16px 0px rgba(255,77,141,0.3)',
                background: 'linear-gradient(135deg, rgba(255,77,141,0.1) 0%, rgba(255,212,229,0.2) 100%)'
              }}
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl border-4 border-retro-softPink relative">
                <div className="absolute inset-0 bg-gradient-to-br from-retro-pink/20 to-transparent z-10"></div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-retro-pink w-24 h-4 -right-6 top-6"></div>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-2 text-retro-pink transform -rotate-1"
                  style={{ textShadow: '2px 2px 0px rgba(255,77,141,0.5)' }}>
                {founder.name}
              </h3>
              <p className="text-retro-softPink font-bold text-lg mb-4 uppercase tracking-wider 
                          bg-retro-darkPink/20 px-4 py-1 rounded-full inline-block">
                {founder.role}
              </p>
              <p className="text-retro-softPink/90 leading-relaxed whitespace-pre-line 
                          bg-retro-black/50 p-4 rounded-lg border border-retro-pink/30">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};