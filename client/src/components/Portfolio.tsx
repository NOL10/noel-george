import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Marichin Group",
    subtitle: "Corporate Website",
    role: "Full Product & Web Developer",
    link: "https://marichin.group/",
    description: [
      "Led requirement gathering, development, and deployment",
      "Implemented SEO and performance optimization",
      "Delivered a clean corporate presence"
    ],
    tags: ["Corporate", "SEO", "Performance"]
  },
  {
    title: "HealHolistic",
    subtitle: "Wellness Brand Website",
    role: "Designer & Developer",
    link: "https://healholistic.in/",
    description: [
      "Designed responsive, brand-aligned UI",
      "Built and deployed complete website",
      "Handled domain and DNS setup"
    ],
    tags: ["Wellness", "Design", "Full Stack"]
  },
  {
    title: "ChronoSync",
    subtitle: "AI Productivity Platform",
    role: "Product Owner & ML Engineer",
    link: null,
    description: [
      "Designed system architecture and user flows",
      "Built FastAPI backend and real-time dashboard",
      "Delivered deployment-ready MVP"
    ],
    tags: ["AI", "FastAPI", "Dashboard"]
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Featured Projects</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs bg-gray-100 hover:bg-gray-200 text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium mb-1">{project.title}</h3>
                  <p className="text-lg text-gray-500 mb-6">{project.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-900 block mb-2">Role: {project.role}</span>
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <CheckCircle2 className="h-5 w-5 mr-3 text-gray-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  {project.link ? (
                    <Button asChild className="rounded-full" variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                     <Badge variant="outline" className="text-sm py-1 px-3">Internal / MVP</Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
