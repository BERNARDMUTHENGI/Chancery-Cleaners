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
  name: "Westpam Cleaning Services",
  tagline: "Professional Cleaning Services You Can Count On",
  description:
    "We offer excellent cleaning services to suit your needs. Our dedicated, professional, and qualified staff deliver top-quality residential, office, and commercial cleaning.",
  phone: "0735 766663",
  email: "westpamcleaning@gmail.com",
  address: "Westlands, Nairobi",
  city: "Nairobi",
  areasServed: "Nairobi and surrounding areas",
  hours: "Open 24 hours",
  rating: 5.0,
  reviewCount: 13,
  yearFounded: "",
  heroImage,
  about:
    "At Westpam Cleaning Services we offer excellent cleaning services to suit your needs. We have a dedicated staff who are professional and qualified. Our services include residential cleaning, office cleaning, commercial cleaning, carpet cleaning, fumigation, home deep cleaning, and car interior cleaning. We take pride in delivering spotless results with attention to detail, ensuring your space is hygienic, fresh, and inviting. Whether you need regular maintenance or a one-time deep clean, our team is ready to serve you with reliability and excellence.",

  services: [
    {
      title: "Residential Cleaning",
      description:
        "Thorough home and apartment cleaning services. We ensure every room is spotless, from deep cleaning to regular upkeep.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Office & Commercial Cleaning",
      description:
        "Professional cleaning for offices, commercial properties, and workspaces. Keep your business environment clean, healthy, and productive.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "Carpet & Fumigation Services",
      description:
        "Deep carpet cleaning to remove stains and allergens, plus effective fumigation to eliminate cockroaches and other pests.",
      image: serviceFumigation,
      icon: "Shield",
    },
    {
      title: "Car Interior & Deep Cleaning",
      description:
        "Comprehensive deep cleaning for vehicles and homes. We leave every surface sparkling, inside and out.",
      image: serviceIndustrial,
      icon: "Car",
    },
  ],

  reviews: [
    {
      name: "James Kariuki",
      rating: 5,
      text: "Westpam did an amazing job cleaning my office. Very professional and thorough. Highly recommend!",
      date: "1 week ago",
    },
    {
      name: "Mary Wambui",
      rating: 5,
      text: "I hired them for home deep cleaning and was impressed. The team arrived on time and left my house spotless.",
      date: "2 weeks ago",
    },
    {
      name: "Peter Njuguna",
      rating: 5,
      text: "Their carpet cleaning and fumigation service was excellent. No more cockroaches and carpets look brand new.",
      date: "3 weeks ago",
    },
    {
      name: "Lucy Muthoni",
      rating: 5,
      text: "Reliable and affordable. I use them for regular residential cleaning and they never disappoint.",
      date: "1 month ago",
    },
    {
      name: "Daniel Otieno",
      rating: 5,
      text: "Great service for car interior cleaning. My car smells fresh and looks immaculate. Will definitely use again.",
      date: "1 month ago",
    },
  ],

  socialLinks: {
    facebook: "https://www.facebook.com/westpamcleaningservices",
    instagram: "https://www.instagram.com/westpam_cleaningservices",
    twitter: "",
    whatsapp: "https://wa.me/254735766663",
  },

  seo: {
    title: "Westpam Cleaning Services | Professional Cleaning in Nairobi",
    description:
      "Westpam Cleaning Services offers residential, office, commercial cleaning, carpet cleaning, fumigation, and deep cleaning in Nairobi. Professional and reliable. Call 0735 766663.",
  },
};

export default businessConfig;