import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="text-xl font-bold tracking-tight font-serif"
        >
          Noel George.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo("work")} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Work
          </button>
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Services
          </button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            About
          </button>
          <Button 
            onClick={() => scrollTo("contact")}
            className="rounded-full px-6"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top-5">
          <button onClick={() => scrollTo("work")} className="text-lg font-medium text-left">
            Work
          </button>
          <button onClick={() => scrollTo("services")} className="text-lg font-medium text-left">
            Services
          </button>
          <button onClick={() => scrollTo("about")} className="text-lg font-medium text-left">
            About
          </button>
          <Button onClick={() => scrollTo("contact")} className="w-full">
            Let's Talk
          </Button>
        </div>
      )}
    </nav>
  );
}
