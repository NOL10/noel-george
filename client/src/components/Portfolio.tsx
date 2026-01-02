import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import marichinImg from "@assets/generated_images/marichin-group-corporate-website-luxury-preview.png";
import healImg from "@assets/generated_images/healholistic-wellness-brand-website-luxury-preview.png";
import chronoImg from "@assets/generated_images/chronosync-ai-productivity-platform-luxury-preview.png";

const projects = [
  {
    title: "Marichin Group",
    subtitle: "Corporate Digital Identity",
    role: "Full Product & Web Developer",
    link: "https://marichin.group/",
    image: marichinImg,
    description: [
      "Strategic requirement gathering and full-cycle development",
      "High-performance SEO and speed optimization",
      "Sophisticated corporate presence for global outreach"
    ],
    tags: ["Strategy", "SEO", "Enterprise"]
  },
  {
    title: "HealHolistic",
    subtitle: "Wellness Brand Experience",
    role: "Lead Designer & Developer",
    link: "https://healholistic.in/",
    image: healImg,
    description: [
      "Serene, brand-aligned responsive interface",
      "End-to-end architecture from design to deployment",
      "Seamless domain and ecosystem management"
    ],
    tags: ["Wellness", "Design", "E-commerce"]
  },
  {
    title: "ChronoSync",
    subtitle: "AI-Driven Productivity Ecosystem",
    role: "Product Owner & ML Engineer",
    link: null,
    image: chronoImg,
    description: [
      "Architected complex user flows and system intelligence",
      "Engineered FastAPI backend with real-time analytics",
      "Built a production-ready AI-first MVP"
    ],
    tags: ["AI", "Architecture", "Fintech"]
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight italic">Crafting digital excellence through precision engineering.</h2>
        </div>

        <div className="grid gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5 group overflow-hidden bg-gray-50 border border-gray-100">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                  className="aspect-video w-full overflow-hidden"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-2/5">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium tracking-widest uppercase border-b border-gray-200 pb-1 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-2">{project.title}</h3>
                <p className="text-lg text-gray-500 mb-8 font-light italic">{project.subtitle}</p>
                
                <div className="space-y-4 mb-10">
                  {project.description.map((item, i) => (
                    <div key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
                      <span className="mr-4 mt-1.5 h-[1px] w-4 bg-gray-300 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {project.link ? (
                  <Button asChild variant="link" className="px-0 text-black hover:no-underline group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-all">View Case Study</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Confidential Architecture</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
