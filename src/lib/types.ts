export interface LocalizedString {
  ar?: string;
  en?: string;
  sv?: string;
}

export interface Settings {
  _id: string;
  siteName: LocalizedString;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  openingHours: {
    day: string;
    hours: string;
  }[];
  deliveryLinks: {
    wolt?: string;
    foodora?: string;
    uberEats?: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
  };
  heroVideo?: string;
  googleMapsEmbed?: string;
}

export interface Category {
  _id: string;
  title: LocalizedString;
  slug: {
    current: string;
  };
  description?: LocalizedString;
  order: number;
}

export interface MenuItem {
  _id: string;
  title: LocalizedString;
  slug: {
    current: string;
  };
  description?: LocalizedString;
  category: Category;
  price: number;
  image?: any;
  allergens?: string[];
  halal: boolean;
  vegetarian: boolean;
  featured: boolean;
  order: number;
}

export interface Promo {
  _id: string;
  title: LocalizedString;
  description?: LocalizedString;
  badge?: string;
  image?: any;
  startDate?: string;
  endDate?: string;
  active: boolean;
}

export interface GalleryItem {
  _id: string;
  title?: string;
  image: any;
  caption?: LocalizedString;
  tags?: string[];
  order: number;
}
