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
  name: "Perfect Cleaning Services",
  tagline: "Your Space, Perfectly Clean",
  description:
    "We offer a wide range of affordable cleaning services including sofaset cleaning, mattress cleaning, fumigation, interior car cleaning, and office cleaning.",
  phone: "0726 958553",
  email: "perfectcleaningservices7@gmail.com",
  address: "Mtongwe Rd, Nairobi",
  city: "Nairobi",
  areasServed: "Nairobi and surrounding areas",
  hours: "Open 24 hours",
  rating: 4.6,
  reviewCount: 14,
  yearFounded: "",
  heroImage,
  about:
    "Perfect Cleaning Services offers a wide range of professional cleaning solutions at affordable prices. We specialize in sofaset cleaning, mattress cleaning, fumigation, interior car cleaning, office cleaning, and general cleaning for homes and businesses. Our team is dedicated to delivering high‑quality results with attention to detail, using safe and effective methods. Whether you need to refresh your furniture, sanitize your car interior, or keep your office spotless, we are here to help. Customer satisfaction is our priority, and we take pride in making every space we clean truly perfect.",

  services: [
    {
      title: "Sofaset & Mattress Cleaning",
      description:
        "Deep cleaning for sofas, upholstery, and mattresses. We remove stains, dust, and allergens to restore freshness and comfort.",
      image: serviceResidential,
      icon: "Sofa",
    },
    {
      title: "Fumigation & Pest Control",
      description:
        "Professional fumigation to eliminate pests and ensure a healthy, safe environment for your home or office.",
      image: serviceFumigation,
      icon: "Shield",
    },
    {
      title: "Interior Car Cleaning",
      description:
        "Thorough cleaning for vehicle interiors – seats, carpets, dashboard, and more. Leave your car fresh and spotless.",
      image: serviceIndustrial,
      icon: "Car",
    },
    {
      title: "Office & General Cleaning",
      description:
        "Comprehensive cleaning for offices, commercial spaces, and homes. We handle everything from dusting to floor care.",
      image: serviceOffice,
      icon: "Building2",
    },
  ],

  reviews: [
    {
      name: "Jane Wanjiku",
      rating: 5,
      text: "Perfect Cleaning did a wonderful job on my sofa set. It looks brand new! Very professional and affordable.",
      date: "1 week ago",
    },
    {
      name: "Michael Otieno",
      rating: 4,
      text: "Good service for car interior cleaning. They were thorough and my car smells great. Would recommend.",
      date: "2 weeks ago",
    },
    {
      name: "Grace Muthoni",
      rating: 5,
      text: "I hired them for office cleaning and they were punctual and did a thorough job. Very reliable.",
      date: "3 weeks ago",
    },
    {
      name: "Peter Njoroge",
      rating: 5,
      text: "Their mattress cleaning service is excellent. My mattress feels fresh and clean. Great team!",
      date: "1 month ago",
    },
    {
      name: "Lucy Wairimu",
      rating: 4,
      text: "Affordable and efficient. They cleaned my carpets and did a good job. Will use them again.",
      date: "1 month ago",
    },
  ],

  socialLinks: {
    facebook: "https://www.facebook.com/Perfect-Cleaning-Services-105673651835455/",
    instagram: "https://www.instagram.com/perfect.cleaningservices",
    twitter: "",
    whatsapp: "https://wa.me/254726958553",
  },

  seo: {
    title: "Perfect Cleaning Services | Sofa, Carpet & Office Cleaning in Nairobi",
    description:
      "Affordable cleaning services in Nairobi: sofaset cleaning, mattress cleaning, fumigation, interior car cleaning, and office cleaning. Reliable and professional. Call 0726 958553.",
  },
};

export default businessConfig;