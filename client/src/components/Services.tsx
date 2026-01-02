import { motion } from "framer-motion";
import { Layout, Smartphone, Database, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Website Development",
    items: ["Business websites", "Clinics & wellness brands", "Portfolios & personal brands", "Landing pages"]
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    items: ["Clean, professional layouts", "Mobile-first responsive design", "Brand-aligned interfaces", "Design Systems"]
  },
  {
    icon: Database,
    title: "Backend & Integrations",
    items: ["Forms & dashboards", "APIs (FastAPI / Flask)", "Database integration", "Auth systems"]
  },
  {
    icon: Rocket,
    title: "Deployment & Performance",
    items: ["Domain & DNS setup", "Hosting & deployment", "Speed optimization", "SEO basics"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">What I Do Best</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-gray-900 mb-4 stroke-1" />
                  <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="mr-2 text-gray-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">"No templates. No shortcuts. Built for performance and clarity."</p>
        </div>
      </div>
    </section>
  );
}
