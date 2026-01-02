import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-900">
            More than just code. <br/>I deliver complete digital products.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I’m <strong className="text-gray-900">Noel George</strong> — a full-stack developer with real production experience building and deploying modern websites, AI systems, and scalable backends.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I don’t just design pages — I own the full delivery: requirements, UX, development, performance optimization, SEO basics, deployment, and long-term scalability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
