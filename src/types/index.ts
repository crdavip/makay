export interface MenuItem {
  name: string;
  price: string;
  desc?: string | null;
  image?: string | null;
  featured?: boolean;
}

export interface MenuCategory {
  title: string;
  subtitle: string | null;
  type: 'comida' | 'cocteles';
  items: MenuItem[];
}
