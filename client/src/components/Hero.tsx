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
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 text-gray-900"
          >
            I Design & Build <br/>
            <span className="text-gray-400">High-Performance Websites</span> <br/>
            That Convert.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light"
          >
            I help businesses, clinics, founders, and individuals establish a strong online presence with fast, clean, and scalable websites — from concept to deployment.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base rounded-full"
              onClick={() => scrollTo("work")}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base rounded-full border-gray-200 hover:bg-gray-50 hover:text-black"
              onClick={() => scrollTo("contact")}
            >
              Get Your Website Built
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
