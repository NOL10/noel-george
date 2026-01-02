import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl font-bold mb-2">Noel George.</p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/NOL10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/noel-george-1141a3248/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:noelgeorge1012@gmail.com" className="text-gray-400 hover:text-black transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
