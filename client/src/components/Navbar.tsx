import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="text-xl font-serif font-bold tracking-tighter"
        >
          Noel George<span className="text-gray-300">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {["work", "services", "about"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item)} 
              className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 hover:text-black transition-colors"
            >
              {item}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("contact")}
            className="rounded-full px-8 h-12 bg-black hover:bg-gray-800 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Inquire
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 flex flex-col justify-center items-center space-y-12 animate-in fade-in duration-500">
          <button className="absolute top-8 right-6" onClick={() => setIsOpen(false)}>
            <X className="h-8 w-8" />
          </button>
          {["work", "services", "about"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item)} 
              className="text-4xl font-serif italic text-gray-900"
            >
              {item}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} className="w-full h-16 text-lg">
            Let's Talk
          </Button>
        </div>
      )}
    </nav>
  );
}
