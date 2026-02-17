import { ArrowRight } from 'lucide-react';
import { Footer } from './Footer';
import { Logo } from './Logo';
import { FastFood } from './Icons/FastFood';
import { Drinks } from './Icons/Drinks';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export const HomeView = ({ onNavigate }: HomeViewProps) => {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-50 z-0"></div>

      <div className="z-10 w-full max-w-md text-center space-y-12">

        {/* LOGO PRINCIPAL */}
        <div className="animate-fade-in-down">
          <Logo className="size-50 mx-auto" />
        </div>

        {/* BOTONES DE SELECCIÓN */}
        <div className="space-y-4 w-full">
          <button
            onClick={() => onNavigate('comida')}
            className="group w-full relative h-32 rounded-2xl overflow-hidden border border-neutral-800 hover:border-white transition-all duration-300 cursor-pointer"
          >
            {/* Imagen de fondo Comidas (Oscurecida) */}
            <div className="absolute inset-0 bg-[url('/food.png')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>

            <div className="relative z-10 h-full flex items-center justify-between px-8">
              <div className="text-left">
                <div className='flex gap-4'>
                  <FastFood className="fill-white w-8 h-8" />
                  <h2 className="text-3xl font-black italic tracking-wide text-white uppercase group-hover:translate-x-2 transition-transform">Comidas</h2>
                </div>
                <p className="text-gray-300 text-xs uppercase tracking-widest mt-1">Hamburguesas • Perros • Asados • Salchipapas</p>
              </div>
              <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('cocteles')}
            className="group w-full relative h-32 rounded-2xl overflow-hidden border border-neutral-800 hover:border-white transition-all duration-300 cursor-pointer"
          >
            {/* Imagen de fondo Cocteles (Oscurecida) */}
            <div className="absolute inset-0 bg-[url('/drink.png')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>

            <div className="relative z-10 h-full flex items-center justify-between px-8">
              <div className="text-left">
                <div className='flex gap-2'>
                  <Drinks className="fill-white w-8 h-8 mr-2" />
                  <h2 className="text-3xl font-black italic tracking-wide text-white uppercase group-hover:translate-x-2 transition-transform">Cócteles</h2>
                </div>
                <p className="text-gray-300 text-xs uppercase tracking-widest mt-1">Licores • Sodas • Bebidas</p>
              </div>
              <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </div>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};
