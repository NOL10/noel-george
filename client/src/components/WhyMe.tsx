import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Documented delivery of high-stakes client projects",
  "Radical end-to-end ownership and accountability",
  "Architectural precision and maintainable codebase",
  "Obsession with performance and conversion metrics",
  "Direct, transparent, and strategic communication"
];

export default function WhyMe() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-6 block">The Advantage</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">Why choose <br/><span className="italic text-gray-400 font-normal">absolute</span> quality?</h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light max-w-lg">
              In a digital landscape crowded with templates, I provide bespoke engineering that elevates your brand and drives measurable impact.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
             <div className="grid gap-4">
               {reasons.map((reason, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="group flex items-center p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
                 >
                    <span className="text-xs font-bold tracking-widest text-gray-500 mr-8 italic">0{index + 1}</span>
                    <span className="text-lg font-light tracking-wide group-hover:translate-x-2 transition-transform duration-500">{reason}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
