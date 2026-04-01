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
  name: "Glitter & Greater Cleaning Services",
  tagline: "Quality is Priority",
  description:
    "Professional cleaning services dedicated to making your spaces shine. We serve Nairobi, Mombasa and environs with residential and commercial cleaning.",
  phone: "0769 866752",
  email: "info@glitterngreater.co.ke",
  address: "Westlands, Nairobi",
  city: "Nairobi",
  areasServed: "Nairobi, Mombasa and nearby areas",
  hours: "Mon–Sun: 7:00 AM – 9:00 PM",
  rating: 5.0,
  reviewCount: 14,
  yearFounded: "",
  heroImage,
  about:
    "Glitter & Greater Cleaning Services is a professional cleaning company where quality is priority. We specialize in residential cleaning, commercial cleaning, and move‑in/move‑out deep cleaning. Our mission is to make your moving easier and your spaces spotless. With a dedicated team and a commitment to excellence, we ensure every job is done to the highest standard. Whether you need regular home cleaning, office maintenance, or a thorough deep clean, we deliver results that truly shine. Serving Nairobi, Mombasa, and surrounding areas, we take pride in reliable, affordable, and professional service.",

  services: [
    {
      title: "Residential Cleaning",
      description:
        "Thorough home cleaning services that leave every room fresh, tidy, and welcoming. Perfect for busy families and regular upkeep.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning for offices, retail spaces, and commercial properties. We help you maintain a clean, productive environment.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "Move‑In / Move‑Out Deep Cleaning",
      description:
        "Comprehensive deep cleaning for properties before or after moving. We handle every detail so your space is perfectly prepared.",
      image: serviceIndustrial,
      icon: "Truck",
    },
    {
      title: "Office & Workspace Sanitization",
      description:
        "Specialized cleaning and disinfection for offices and workplaces. Keep your team safe and your workspace sparkling.",
      image: serviceFumigation,
      icon: "Sparkles",
    },
  ],

  reviews: [
    {
      name: "Esther Mwangi",
      rating: 5,
      text: "Glitter & Greater did an amazing job with my apartment move-out clean. Everything was spotless and the landlord was impressed. Highly recommend!",
      date: "1 week ago",
    },
    {
      name: "Brian Omondi",
      rating: 5,
      text: "I hired them for office cleaning and they've been consistently great. Professional, punctual, and thorough. Quality is indeed priority.",
      date: "2 weeks ago",
    },
    {
      name: "Catherine Wanjiku",
      rating: 5,
      text: "Best cleaning service I've used in Nairobi. They made my home shine and were very affordable. Will definitely book again.",
      date: "3 weeks ago",
    },
    {
      name: "Michael Kiprop",
      rating: 5,
      text: "They helped us with post-construction cleanup. The team was efficient and paid attention to every detail. Great service!",
      date: "1 month ago",
    },
    {
      name: "Lucy Achieng",
      rating: 5,
      text: "Very reliable and friendly. My house has never been this clean. Thank you Glitter & Greater!",
      date: "1 month ago",
    },
  ],

  socialLinks: {
    facebook: "https://www.facebook.com/glitterngreater",
    instagram: "https://www.instagram.com/glitterngreater",
    twitter: "",
    whatsapp: "https://wa.me/254769866752",
  },

  seo: {
    title: "Glitter & Greater Cleaning Services | Professional Cleaning in Nairobi & Mombasa",
    description:
      "Professional residential and commercial cleaning services in Nairobi and Mombasa. Deep cleaning, office sanitization, and move-in/out cleaning. Quality is priority. Call 0769 866752.",
  },
};

export default businessConfig;