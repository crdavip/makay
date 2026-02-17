import { Instagram, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="w-full text-center text-neutral-600 text-xs pb-30 md:pb-10 mt-auto">
    <div className="py-4 text-neutral-500 flex justify-center gap-6">
      <a href="https://www.instagram.com/restobar_makay" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={20} />@restobar_makay</a>
      <a href="https://wa.link/47ptoi" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Phone size={20} />314 8108346</a>
    </div>
    <p>
      Copyright © {new Date().getFullYear()} Makay. Todos los derechos reservados.
      <br className="sm:hidden" /> <br /> Desarrollado por {' '}
      <a
        href="https://crdavip.vercel.app/"
        target="_blank"
        className="text-neutral-400 font-bold hover:text-yellow-500 transition-colors"
      >
        Cristian David
      </a>
    </p>
  </footer>
);
