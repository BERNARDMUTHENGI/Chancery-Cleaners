// ============================================================
// BUSINESS CONFIGURATION FILE
// ============================================================
// This is the ONLY file you need to edit per client.
// Change the details below and the entire website updates.
// ============================================================

import heroImage from "@/assets/hero-cleaning.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceFumigation from "@/assets/service-fumigation.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  areasServed: string;
  hours: string;
  rating: number;
  reviewCount: number;
  yearFounded?: string;
  heroImage: string;
  about: string;
  services: {
    title: string;
    description: string;
    image: string;
    icon: string; // lucide icon name
  }[];
  reviews: {
    name: string;
    rating: number;
    text: string;
    date: string;
  }[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    whatsapp?: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

const businessConfig: BusinessConfig = {
  name: "Mop and Shine",
  tagline: "Best Cleaning Services in Kenya",
  description:
    "We specialize in office cleaning, home cleaning, pest control, upholstery cleaning, gardening and landscaping, and carpet cleaning. Great customer service, highly trained stewards, and 100% satisfaction guaranteed.",
  phone: "0722 675801",
  email: "info@mopandshine.co.ke",
  address: "Nairobi, Kenya",
  city: "Nairobi",
  areasServed: "Kenya",
  hours: "Mon–Sat: 8:00 AM – 5:00 PM",
  rating: 4.9,
  reviewCount: 10,
  yearFounded: "",
  heroImage,
  about:
    "Mop and Shine is the best cleaning services company in Nairobi and Kenya at large. We specialize in office cleaning services, home or domestic cleaning services involving pest control, upholstery cleaning services, gardening and landscaping, carpet cleaning, and more. Our highly trained stewards deliver exceptional results with great attention to detail, ensuring every customer is 100% satisfied. We pride ourselves on great value for money, reliability, and professional service tailored to your needs. Whether for your home, office, or commercial property, Mop and Shine is your trusted partner for a clean and healthy environment.",

  services: [
    {
      title: "Office Cleaning",
      description:
        "Comprehensive office cleaning solutions to keep your workspace spotless, hygienic, and professional.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "Domestic & Home Cleaning",
      description:
        "Thorough home cleaning services including regular upkeep, deep cleaning, and tailored domestic solutions.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Upholstery & Carpet Cleaning",
      description:
        "Deep cleaning for sofas, carpets, and upholstery. Remove stains, dust, and allergens to restore freshness.",
      image: serviceFumigation,
      icon: "Sofa",
    },
    {
      title: "Pest Control & Gardening",
      description:
        "Professional pest control services along with gardening and landscaping to keep your property beautiful and pest‑free.",
      image: serviceIndustrial,
      icon: "Sprout",
    },
  ],

  reviews: [
    {
      name: "Wanjugu Thitu",
      rating: 5,
      text: "Great customer service & well trained stewards. I recommend them 💯",
      date: "1 month ago",
    },
    {
      name: "Jason Mburu",
      rating: 5,
      text: "Great customer service with highly trained stewards who makes sure the customer is 100% satisfied. Great value for money. Highly recommended",
      date: "2 months ago",
    },
    {
      name: "Mary Wanjiku",
      rating: 5,
      text: "I hired Mop and Shine for carpet cleaning and they did an amazing job. Professional, punctual, and affordable.",
      date: "3 weeks ago",
    },
    {
      name: "Peter Kamau",
      rating: 4,
      text: "Very reliable office cleaning service. They keep our workplace spotless every week. Great team.",
      date: "1 month ago",
    },
    {
      name: "Grace Muthoni",
      rating: 5,
      text: "Their gardening and landscaping service transformed my compound. Highly professional and great results.",
      date: "2 months ago",
    },
  ],

  socialLinks: {
    facebook: "",
    instagram: "",
    twitter: "",
    whatsapp: "https://wa.me/254722675801",
  },

  seo: {
    title: "Mop and Shine | Best Cleaning Services in Nairobi & Kenya",
    description:
      "Mop and Shine offers professional office cleaning, home cleaning, pest control, upholstery cleaning, gardening and landscaping in Nairobi and Kenya. Trusted, trained stewards. Call 0722 675801.",
  },
};

export default businessConfig;