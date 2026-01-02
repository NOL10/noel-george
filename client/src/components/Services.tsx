import { motion } from "framer-motion";
import { Layout, Smartphone, Database, Rocket } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Digital Ecosystems",
    desc: "Bespoke digital architecture for high-stakes enterprise projects."
  },
  {
    icon: Smartphone,
    title: "Experiential UI/UX",
    desc: "Luxury-tier interfaces designed for maximum conversion and impact."
  },
  {
    icon: Database,
    title: "Core Engineering",
    desc: "Scalable backend systems and high-performance API integration."
  },
  {
    icon: Rocket,
    title: "Strategic Scale",
    desc: "Optimizing for peak performance and global visibility via SEO."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-[#080808] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-32">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-8 block">Services</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-[0.9]">
            The <span className="italic font-normal text-gray-600">Absolute</span> <br/>Standard.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="p-16 bg-[#080808] hover:bg-[#0c0c0c] transition-colors duration-700 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <service.icon className="h-6 w-6 text-gray-500 mb-12 stroke-[1px]" />
                <h3 className="text-2xl font-serif font-medium mb-6 tracking-tight uppercase">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-xs uppercase text-[10px] tracking-[0.2em]">
                  {service.desc}
                </p>
              </div>
              <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-800 italic">0{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
