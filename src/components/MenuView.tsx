import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Utensils } from 'lucide-react';
import { MENU_DATA } from '../data/menuData';
import { FeaturedItem } from './FeaturedItem';
import { SimpleItem } from './SimpleItem';
import { Footer } from './Footer';
import { Cutlery, Baby, Burger, Plus, HotDog, FrenchFries, Fire, Coctail, NoAlcohol, Soda, Lemonade } from './Icons';
import { Logotipo } from './Logotipo';

const CategoryHeader = ({ title, subtitle, Icon }: { title: string, subtitle?: string, Icon: React.ElementType }) => {
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight / 2);
    };

    const createObserver = () => {
      // Determine rootMargin based on sticky offsets with a safety buffer.
      // Mobile: top-16 (64px). Buffer +11px -> 75px.
      // Desktop: top-[140px] (140px). Buffer +10px -> 150px.
      // Increasing the buffer ensures the sentinel is considered "outside" (stuck) 
      // even if there are slight sub-pixel rendering differences or layout shifts.
      const isMobile = window.innerWidth < 640;
      const topOffset = isMobile ? 75 : 150;

      return new IntersectionObserver(handleObserver, {
        threshold: 1.0,
        rootMargin: `-${topOffset}px 0px 0px 0px`
      });
    };

    let observer = createObserver();
    const currentSentinel = sentinelRef.current;

    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    // Re-create observer on resize to handle layout changes (mobile <-> desktop)
    const handleResize = () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
      observer.disconnect();
      observer = createObserver();
      if (currentSentinel) observer.observe(currentSentinel);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="absolute -top-px h-px w-full invisible pointer-events-none" />
      <div className={`sticky top-16 sm:top-[150px] z-30 py-4 mb-8 -mx-4 px-6 flex items-center gap-4 transition-all duration-300 ${isStuck
        ? 'bg-black/95 backdrop-blur-md border-y border-white/10 shadow-xl shadow-black/50'
        : 'bg-transparent border-y border-transparent'
        }`}>
        <div className="p-2 rounded-xl bg-linear-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-inner">
          <Icon className="fill-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-2xl sm:text-4xl font-black text-white uppercase tracking-wider transition-colors ${isStuck ? '' : 'drop-shadow-md'}`}>
            {title}
          </h3>
          {subtitle && <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{subtitle}</span>}
        </div>
      </div>
    </>
  );
};

interface MenuViewProps {
  currentView: string;
  onBack: () => void;
}

export const MenuView = ({ currentView, onBack }: MenuViewProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const getFilteredData = () => {
    return Object.entries(MENU_DATA).filter(([, data]) => data.type === currentView);
  };

  const filteredData = getFilteredData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    filteredData.forEach(([key]) => {
      const element = document.getElementById(key);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  const CATEGORY_ICONS: Record<string, React.ElementType> = {
    // Comida
    entradas: Cutlery,
    intantil: Baby,
    adicionales: Plus,
    hamburguesas: Burger,
    perros: HotDog,
    papas: FrenchFries,
    asados: Fire,
    // Cocteles
    cocteles: Coctail,
    bebidas_sin_alcohol: NoAlcohol,
    sodas: Soda,
    limonadas: Lemonade,
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 640;
      const headerOffset = isMobile ? 80 : 180; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      {/* HEADER CON BOTÓN VOLVER */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 h-16 flex items-center px-4 justify-between shadow-lg shadow-black/50">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors uppercase text-sm font-bold tracking-wide"
        >
          <ChevronLeft size={20} /> Volver
        </button>
        <Logotipo className="w-24 h-24 fill-white" />
        <div className="hidden sm:block sm:w-8"></div> {/* Spacer para centrar logo */}
      </header>

      {/* CATEGORY NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800 py-3 overflow-x-auto no-scrollbar sm:sticky sm:top-16 sm:bottom-auto sm:border-t-0 sm:border-b sm:z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] sm:shadow-lg">
        <div className="container mx-auto px-4 flex gap-4 sm:justify-center min-w-max">
          {filteredData.map(([key, data]) => {
            const Icon = CATEGORY_ICONS[key] || Utensils;
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`flex flex-col items-center gap-1.5 min-w-[64px] transition-all duration-300 group ${isActive ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`p-2.5 rounded-2xl transition-all duration-300 ${isActive ? 'bg-white text-black shadow-lg shadow-white/20' : 'bg-neutral-800 group-hover:bg-neutral-700 text-gray-400 border border-white/5'}`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'fill-black' : 'fill-gray-400 group-hover:fill-gray-300'}`} />
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>{data.title}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* CONTENIDO SCROLLABLE */}
      <main className="container mx-auto px-4 py-8 max-w-xl pb-32 sm:pb-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500 drop-shadow-sm">
            {currentView === 'comida' ? 'Carta de Comidas' : 'Carta de Cócteles'}
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-4 rounded-full opacity-80"></div>
        </div>

        {filteredData.map(([key, data]) => {
          const Icon = CATEGORY_ICONS[key] || Utensils;
          return (
            <div key={key} id={key} className="mb-2 scroll-mt-32 relative">
              <CategoryHeader
                title={data.title}
                subtitle={data.subtitle || undefined}
                Icon={Icon}
              />

              <div className="space-y-4 px-1">
                {data.items.map((item, idx) => (
                  <div key={idx} className="transform transition-all duration-300 hover:scale-[1.01]">
                    {item.image ? <FeaturedItem item={item} /> : <SimpleItem item={item} />}
                  </div>
                ))}
              </div>

              {/* Separator between categories */}
              <div className="h-12 border-b border-dashed border-white/5 mx-8 my-8"></div>
            </div>
          )
        })}

      </main>

      <Footer />
    </div>
  );
};
