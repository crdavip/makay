import type { MenuItem } from '../types';



export const FeaturedItem = ({ item }: { item: MenuItem }) => {
  // Extract number for display. Assuming '20.000' -> '20'. 
  // If price is simple '20', use it.
  const displayPrice = item.price.includes('.') ? item.price.split('.')[0] : item.price;

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto animate-fade-in-up mb-12">
      {/* Image Container */}
      <div className="relative w-full aspect-square mb-6 p-2 border-2 border-white rounded-3xl">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        )}

        {/* Price Badge */}
        <div className="absolute -bottom-6 -right-4 bg-white text-black rounded-full w-24 h-24 flex items-center justify-center shadow-xl z-10 border-4 border-transparent">
          <div className="flex items-start leading-none font-black text-black">
            <span className="text-xl mt-0">$</span>
            <span className="text-3xl tracking-tighter">{displayPrice}</span>
          </div>
          <span className="text-sm font-bold uppercase tracking-wide mt-2.5 ml-1">mil</span>
        </div>
      </div>

      {/* Content */}
      <div className="text-left px-2">
        <h3 className="text-4xl text-white mb-2 tracking-wide">
          {item.name}
        </h3>
        <p className="text-gray-400 text-base leading-snug font-medium">
          {item.desc}
        </p>
      </div>
    </div>
  );
};
