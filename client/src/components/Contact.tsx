import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-3xl p-12 md:p-24 text-center border border-gray-100"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-gray-900">Have a project in mind?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Have a website idea or need a professional online presence? Let’s build something solid.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="h-16 px-10 text-lg rounded-full" asChild>
              <a href="mailto:noelgeorge1012@gmail.com">
                Message Me <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
