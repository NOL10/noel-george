import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gray-50/30 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gray-400 border-l-[1px] border-black pl-6">Independent Design Engineer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[140px] font-serif font-medium leading-[0.85] mb-16 text-black tracking-tighter"
          >
            Exceptional <br/>
            <span className="italic font-normal text-gray-300">Digital</span> <br/>
            Experiences.
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md"
            >
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic mb-8">
                “I help brands establish authority through high-performance engineering and strategic design.”
              </p>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                Specializing in bespoke digital assets for businesses, clinics, and founders who demand perfection. From concept to deployment, I own the full delivery cycle.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center"
            >
              <button 
                onClick={() => scrollTo("work")}
                className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-gray-100 hover:border-black transition-all duration-700 overflow-hidden bg-white"
              >
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <ArrowDown className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-700" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
