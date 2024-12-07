import { motion } from "framer-motion";
import { Code, Zap, Heart, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Low-Code Development",
      description: "Build powerful applications with minimal coding, perfect for rapid prototyping and deployment.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Experience exceptional performance with our optimized runtime engine.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "User-Centric Design",
      description: "Create beautiful, intuitive interfaces that your users will love.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Bank-grade security features to keep your applications and data safe.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(45deg, #FF6B6B 0%, #FFB347 100%)',
    }}>
      {/* Retro Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(transparent 95%, rgba(255,255,255,0.2) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.2) 95%)',
        backgroundSize: '20px 20px',
        opacity: '0.2'
      }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-white font-bold text-lg tracking-widest uppercase bg-grenadine-500 px-6 py-2 rounded-full inline-block mb-4 border-2 border-white shadow-lg">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white mb-4" style={{
            textShadow: '2px 2px 0px #FF4747, 4px 4px 0px #FFB347'
          }}>
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-grenadine-300"
              style={{
                boxShadow: '4px 4px 0px #FF4747'
              }}
            >
              <div className="text-grenadine-500 mb-6 bg-grenadine-100 p-4 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-grenadine-600">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};