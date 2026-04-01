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
  name: "PANARI CLEANING SERVICES",
  tagline: "ISO Certified Professional Cleaning",
  description:
    "An ISO certified company and leading professional cleaning and allied services provider in Kenya. Members of ISSA, IDA, and KPCA.",
  phone: "0704 918333",
  email: "info@panaricleaning.co.ke",
  address: "Kenyatta Avenue, Nairobi",
  city: "Nairobi",
  areasServed: "Nairobi and nationwide",
  hours: "Mon–Sun: 24 hours",
  rating: 5.0,
  reviewCount: 1,
  yearFounded: "",
  heroImage,
  about:
    "Panari Cleaning Services is an ISO certified company and the leading professional cleaning and allied services company in Kenya. Members of the International Sanitary Services Association (ISSA), International Detailers Association (IDA), and the Kenya Professional Cleaners Association (KPCA); we are committed to providing modern, professional, environmentally friendly and efficient service to commercial, industrial and domestic clients. Our dedication to quality and innovation ensures that every project is completed to the highest standards, using eco‑friendly products and state‑of‑the‑art equipment. Whether you need routine office cleaning, industrial facility maintenance, or specialized deep cleaning, our experienced team delivers excellence you can trust.",

  services: [
    {
      title: "Commercial & Office Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, retail spaces, and commercial properties. We maintain a professional, hygienic environment for your business.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "Industrial Cleaning",
      description:
        "Heavy‑duty cleaning for factories, warehouses, and industrial facilities. Our team handles large‑scale projects with safety and efficiency.",
      image: serviceIndustrial,
      icon: "Factory",
    },
    {
      title: "Domestic & Residential Cleaning",
      description:
        "High‑quality home cleaning services tailored to your needs. From regular upkeep to deep cleaning, your home will shine.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Specialized Sanitization",
      description:
        "Advanced disinfection and sanitization services for sensitive environments, using eco‑friendly and effective methods.",
      image: serviceFumigation,
      icon: "Shield",
    },
  ],

  reviews: [
    {
      name: "David Mwangi",
      rating: 5,
      text: "Panari Cleaning Services provided exceptional service for our office. Professional, thorough, and ISO certified – you can trust them. Highly recommended!",
      date: "3 weeks ago",
    },
  ],

  socialLinks: {
    facebook: "",
    instagram: "",
    twitter: "",
    whatsapp: "https://wa.me/254704918333",
  },

  seo: {
    title: "PANARI CLEANING SERVICES | ISO Certified Cleaning Company in Nairobi",
    description:
      "ISO certified professional cleaning company in Nairobi. Members of ISSA, IDA, and KPCA. Commercial, industrial, and domestic cleaning. Environmentally friendly. Call 0704 918333.",
  },
};

export default businessConfig;