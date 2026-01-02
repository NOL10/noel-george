import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden bg-white noise-overlay">
      {/* Structural background element */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#fcfcfc] border-l border-gray-50 -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mb-16 flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-bold tracking-[0.8em] uppercase text-gray-400">Independent Studio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            className="text-7xl md:text-[160px] font-serif font-medium leading-[0.82] mb-20 text-black tracking-tighter"
          >
            Digital <br/>
            <span className="italic font-normal text-gray-200">Excellence</span> <br/>
            Redefined.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="md:col-span-5"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8 max-w-sm">
                Strategic design and high-performance engineering for global brands that demand perfection.
              </p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => scrollTo("work")}
                  className="group relative flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase"
                >
                  <span className="pb-1 border-b border-black group-hover:border-transparent transition-all duration-500">Selected Works</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="md:col-span-7 hidden md:flex justify-end"
            >
               <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-300 transform rotate-90 origin-right translate-y-20">
                 Est. 2022 — Bangalore, IN
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cinematic corner label */}
      <div className="absolute bottom-12 left-6 lg:left-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col gap-6"
        >
          <div className="w-[1px] h-32 bg-gray-100" />
          <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-gray-300 [writing-mode:vertical-lr]">Scroll for Case Studies</span>
        </motion.div>
      </div>
    </section>
  );
}
