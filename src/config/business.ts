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
  name: "Nairobi StayCare Cleaning Services",
  tagline: "Reliable House & Carpet Cleaning You Can Trust",
  description:
    "Affordable, professional cleaning services in Kasarani and nearby areas. We specialize in house cleaning, sofa & carpet cleaning, deep cleaning, and laundry.",
  phone: "0797 132778",
  email: "info@nairobistaycare.co.ke",
  address: "Kahawa Sukari, Nairobi",
  city: "Nairobi",
  areasServed: "Kahawa Sukari, Kasarani, and nearby areas",
  hours: "Mon–Sat: 9:00 AM – 5:00 PM",
  rating: 5.0,
  reviewCount: 5,
  yearFounded: "2023",
  heroImage,
  about:
    "Nairobi StayCare provides reliable house and carpet cleaning services in Kasarani and nearby areas. We offer house cleaning, apartment cleaning, sofa and carpet cleaning, and move-in or move-out deep cleaning and laundry services. Our goal is to provide affordable, professional cleaning that leaves homes fresh and comfortable. With a focus on guest-ready turnovers for Airbnb hosts, we ensure every space is spotless and inviting. Our team is dedicated to delivering high-quality results with attention to detail, using safe and effective cleaning methods. Whether you need regular maintenance or a one-time deep clean, we are here to help you enjoy a cleaner, healthier home.",

  services: [
    {
      title: "Residential Cleaning",
      description:
        "Thorough house and apartment cleaning services that leave every room sparkling clean and fresh. Ideal for regular maintenance or one-off cleans.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Carpet & Sofa Cleaning",
      description:
        "Professional deep cleaning for carpets, rugs, and upholstery. Remove stains, dirt, and allergens to restore freshness and extend the life of your furniture.",
      image: serviceFumigation,
      icon: "Sofa",
    },
    {
      title: "Deep Cleaning (Move In/Out)",
      description:
        "Comprehensive deep cleaning for move-in or move-out situations. We cover every corner, ensuring the property is spotless and ready for its next occupant.",
      image: serviceOffice,
      icon: "Sparkles",
    },
    {
      title: "Laundry Services",
      description:
        "Convenient laundry and dry cleaning services. Let us handle your laundry so you can focus on what matters most.",
      image: serviceIndustrial,
      icon: "Shirt",
    },
  ],

  reviews: [
    {
      name: "Anne Wanjiku",
      rating: 5,
      text: "Excellent service! They cleaned my apartment thoroughly and were very professional. Highly recommend Nairobi StayCare.",
      date: "2 weeks ago",
    },
    {
      name: "John Mwangi",
      rating: 5,
      text: "Best carpet cleaning I've ever had. They removed tough stains and the sofa looks brand new. Very happy with the service.",
      date: "1 month ago",
    },
    {
      name: "Mercy Karanja",
      rating: 5,
      text: "I used their move-out deep cleaning service and the landlord was impressed. The team was punctual and did a fantastic job.",
      date: "3 weeks ago",
    },
    {
      name: "Peter Odhiambo",
      rating: 5,
      text: "Great laundry service! They picked up and delivered on time. Clothes came back fresh and neatly folded. Will definitely use again.",
      date: "1 month ago",
    },
    {
      name: "Lucy Njoroge",
      rating: 5,
      text: "Affordable and reliable. They cleaned my Airbnb unit and it was guest-ready in no time. Great attention to detail.",
      date: "2 months ago",
    },
  ],

  socialLinks: {
    facebook: "",
    instagram: "https://www.instagram.com/nairobistaycare",
    twitter: "",
    whatsapp: "https://wa.me/254797132778",
  },

  seo: {
    title: "Nairobi StayCare Cleaning Services | Reliable House & Carpet Cleaning in Kasarani",
    description:
      "Affordable professional cleaning services in Kasarani, Nairobi. House cleaning, carpet & sofa cleaning, deep cleaning, laundry and Airbnb turnovers. Book today!",
  },
};

export default businessConfig;