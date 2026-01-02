import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 border-l-2 border-black pl-4">Digital Architect</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl md:text-[120px] font-serif font-medium leading-[0.9] mb-12 text-black tracking-tighter"
          >
            Building <br/>
            <span className="italic font-normal text-gray-300">Exceptional</span> <br/>
            Digital Assets.
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-gray-500 max-w-md leading-relaxed font-light"
            >
              Strategic design and high-performance engineering for brands that demand perfection. I transform complex visions into seamless, conversion-driven web experiences.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
