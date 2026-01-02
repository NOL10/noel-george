import { motion } from "framer-motion";
import { Layout, Smartphone, Database, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Digital Ecosystems",
    items: ["Enterprise solutions", "High-end brand identities", "Strategic landing experiences", "Bespoke web apps"]
  },
  {
    icon: Smartphone,
    title: "Experiential Design",
    items: ["Luxury UI/UX design", "Motion & micro-interactions", "Responsive fluid layouts", "Visual storytelling"]
  },
  {
    icon: Database,
    title: "Core Engineering",
    items: ["FastAPI / Flask backends", "Real-time data processing", "Scalable cloud architecture", "Robust API design"]
  },
  {
    icon: Rocket,
    title: "Optimization & Scale",
    items: ["Core Web Vitals mastery", "SEO strategic dominance", "Automated deployments", "Performance engineering"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight italic">Precision tools for modern industry leaders.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white p-12 border border-gray-100 hover:z-10 hover:shadow-2xl transition-all duration-700"
            >
              <div className="mb-12">
                <service.icon className="h-8 w-8 text-black stroke-[1px]" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-8 uppercase tracking-widest">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-xs tracking-wider flex items-center">
                    <span className="h-[1px] w-2 bg-gray-200 mr-3 group-hover:w-4 group-hover:bg-black transition-all" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
