import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import marichinImg from "@assets/generated_images/marichin_group_corporate_website_luxury_preview.png";
import healImg from "@assets/generated_images/healholistic_wellness_brand_website_luxury_preview.png";
import chronoImg from "@assets/generated_images/chronosync_ai_productivity_platform_luxury_preview.png";
import bitbonImg from "@assets/generated_images/bitbon_minimalist_bitcoin_tracker_widget_preview.png";

const projects = [
  {
    title: "Marichin Group",
    subtitle: "Enterprise Identity",
    image: marichinImg,
    link: "https://marichin.group/",
    tags: ["Product", "Strategy"]
  },
  {
    title: "HealHolistic",
    subtitle: "Brand Experience",
    image: healImg,
    link: "https://healholistic.in/",
    tags: ["Design", "E-com"]
  },
  {
    title: "BitBon",
    subtitle: "Open Source Utility",
    image: bitbonImg,
    link: "https://github.com/NOL10",
    tags: ["Engineering", "Fintech"]
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-40 bg-white noise-overlay">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 mb-6 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-serif text-black leading-[0.9]">
              Selected <br/><span className="italic font-normal text-gray-300">Case Studies.</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-2">01 — 03</p>
            <div className="w-24 h-[1px] bg-gray-100 ml-auto" />
          </div>
        </div>

        <div className="space-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-50">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Overlay details on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 px-3 py-1 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-medium mb-2 group-hover:italic transition-all duration-700">{project.title}</h3>
                  <p className="text-gray-500 font-light italic">{project.subtitle}</p>
                </div>
                
                <Button asChild variant="link" className="px-0 text-black hover:no-underline group/btn pt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-black pb-1 group-hover/btn:border-transparent transition-all">Case Detail</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
