import { motion } from "framer-motion";

export const TechPlungeLogo = () => (
  <motion.div className="font-bold text-2xl tracking-tighter">
    <span className="font-black">TECH</span>
    <span className="font-normal italic">PLUNGE</span>
  </motion.div>
);

export const FiredLogo = () => (
  <motion.div className="font-bold text-3xl tracking-widest uppercase" style={{ fontFamily: 'serif' }}>
    F I R E D
  </motion.div>
);

export const BfmLogo = () => (
  <motion.div className="flex flex-col items-center font-bold">
    <span className="text-2xl tracking-tight">BFM</span>
    <span className="text-sm tracking-wider">BOUZENESS</span>
  </motion.div>
);

export const AbdicazionicaLogo = () => (
  <motion.div className="font-bold italic text-xl">
    La abdicazionica
  </motion.div>
);