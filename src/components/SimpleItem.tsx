import type { MenuItem } from '../types';

export const SimpleItem = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-start py-4 border-b border-white/10 last:border-0 group animate-fade-in-up">
    <div className="pr-4">
      <h3 className="font-semibold text-white text-2xl mb-1 group-hover:text-gray-300 transition-colors">{item.name}</h3>
      <p className="text-gray-500 leading-relaxed text">{item.desc}</p>
    </div>
    <span className="font-bold text-white whitespace-nowrap tracking-wide text-2xl">
      {item.price === "Consultar" ? "Consultar" : `$${item.price}`}
    </span>
  </div>
);
