import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Real client projects delivered",
  "End-to-end ownership",
  "Clean, maintainable code",
  "Performance-focused builds",
  "Clear communication"
];

export default function WhyMe() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Why work with me?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I bring a blend of design sensibility and engineering rigor to every project. 
              My goal isn't just to write code, but to solve business problems through software.
            </p>
          </div>
          <div className="flex-1 w-full">
             <div className="grid gap-6">
               {reasons.map((reason, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
                 >
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">{reason}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
