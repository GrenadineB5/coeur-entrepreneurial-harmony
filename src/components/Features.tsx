import { motion } from "framer-motion";
import { Code, Zap, Heart, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Low-Code Development",
      description: "Build powerful applications with minimal coding, perfect for rapid prototyping and deployment.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience exceptional performance with our optimized runtime engine.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Create beautiful, intuitive interfaces that your users will love.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security features to keep your applications and data safe.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-grenadine-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-grenadine-400 font-medium">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
            Powerful Features, Timeless Elegance
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-grenadine-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};