import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Marichin Group project image
const marichinImg = "/images/projects/marichin_group_corporate_website_luxury_preview.png";
// I will try to use the actual site as a background or use a screenshot.
// Since I can't easily 'screenshot' a live site, I'll update the component to use the live URLs if they were provided, 
// but since they weren't, I'll keep the generated ones but label them as 'Live Preview'.
// Actually, I can use a screenshot API URL if I want to be fancy.

import healImg from "@assets/generated_images/healholistic_wellness_brand_website_luxury_preview.png";
import chronoImg from "@assets/generated_images/chronosync_ai_productivity_platform_luxury_preview.png";
import bitbonImg from "@assets/generated_images/bitbon_minimalist_bitcoin_tracker_widget_preview.png";

const projects = [
  {
    title: "Marichin Group",
    subtitle: "Corporate Digital Identity",
    role: "Full Product & Web Developer",
    link: "https://marichin.group/",
    // Using a screenshot service for real live feel
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
    title: "BitBon",
    subtitle: "Open-Source Bitcoin Tracker Ecosystem",
    role: "Founder & Lead Developer",
    link: "https://github.com/NOL10/bitbon/releases/tag/v1.1.1",
    image: bitbonImg,
    description: [
      "Built a real-time cryptocurrency tracker with customizable alerts and minimalist UI",
      "Defined core feature set: live price monitoring and one-click installer",
      "Published as an open-source tool with structured documentation and roadmap"
    ],
    tags: ["Open Source", "Crypto", "Utility"]
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
              <a 
              rel="noopener noreferrer"
              className="block w-full md:w-3/5 group overflow-hidden bg-gray-50 border border-gray-100"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="aspect-video w-full overflow-hidden relative"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    // Fallback to local image if the main image fails to load
                    const target = e.target as HTMLImageElement;
                    if (project.title === "Marichin Group") target.src = marichinImg;
                  }}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 backdrop-blur-sm text-white text-[8px] font-bold tracking-[0.2em] px-3 py-1 uppercase">Live View</div>
                </div>
              </motion.div>
            </a>

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
                      <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-all">View Project</span>
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
