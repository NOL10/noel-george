import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "918296644500"; // Based on resume provided
  const email = "noelgeorge1012@gmail.com";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="bg-gray-50 rounded-[0px] p-12 md:p-24 text-center border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-black" />
          
          <h2 className="text-4xl md:text-7xl font-serif mb-8 text-gray-900 leading-tight">
            Let’s build something <br/><span className="italic font-normal text-gray-400">extraordinary.</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-light">
            Have a website idea or need a professional online presence? <br/>Choose your preferred way to connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="h-16 px-10 text-sm font-bold tracking-widest uppercase rounded-[0px] bg-black hover:bg-gray-800 transition-all group"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                WhatsApp Me
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 px-10 text-sm font-bold tracking-widest uppercase rounded-[0px] border-gray-200 hover:bg-white hover:border-black transition-all group"
              asChild
            >
              <a href={`mailto:${email}`}>
                <Mail className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                Email Inquiry
              </a>
            </Button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-200/50">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Typically responds within 24 hours</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
