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
  name: "ParamountClear Cleaning Services",
  tagline: "Professional Cleaning You Can Trust",
  description:
    "The leading professional cleaning and allied services company in Kenya. Modern, professional, environmentally friendly and efficient service.",
  phone: "0712 773330",
  email: "info@paramountclear.co.ke",
  address: "Nairobi, Kenya",
  city: "Nairobi",
  areasServed: "Nairobi and nearby areas",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  rating: 4.9,
  reviewCount: 13,
  yearFounded: "2018",
  heroImage,
  about:
    "PARAMOUNTCLEAR Cleaning Services is a Registered company and the leading professional cleaning and allied services company in Kenya. We are committed to providing modern, professional, environmentally friendly and efficient service to commercial, industrial and domestic clients. Over the years, we've learned that great service begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing our services. PARAMOUNTCLEAR CLEANING SERVICES finishes each project on schedule and with the highest level of quality.",

  services: [
    {
      title: "Office Cleaning",
      description:
        "Comprehensive office cleaning solutions to keep your workspace spotless, hygienic, and productive.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "Residential Cleaning",
      description:
        "Thorough home cleaning services that leave every room sparkling clean and fresh.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Fumigation Services",
      description:
        "Professional pest control and fumigation to protect your property from unwanted pests.",
      image: serviceFumigation,
      icon: "Shield",
    },
    {
      title: "Industrial Cleaning",
      description:
        "Heavy-duty cleaning for warehouses, factories, and industrial facilities.",
      image: serviceIndustrial,
      icon: "Factory",
    },
  ],

  reviews: [
    {
      name: "James Mwangi",
      rating: 5,
      text: "Excellent service! They cleaned our office thoroughly and were very professional. Highly recommend ParamountClear.",
      date: "2 weeks ago",
    },
    {
      name: "Sarah Wanjiku",
      rating: 5,
      text: "I've been using their residential cleaning services for 6 months now. Always on time and the quality is consistently great.",
      date: "1 month ago",
    },
    {
      name: "David Ochieng",
      rating: 5,
      text: "Their fumigation service was top-notch. No more pest problems since they treated our warehouse. Very professional team.",
      date: "1 month ago",
    },
    {
      name: "Grace Njeri",
      rating: 4,
      text: "Good cleaning service overall. The team was friendly and did a solid job on our apartment. Would use again.",
      date: "2 months ago",
    },
    {
      name: "Peter Kamau",
      rating: 5,
      text: "Best cleaning company in Nairobi! They handled our post-construction cleanup perfectly. Incredible attention to detail.",
      date: "3 months ago",
    },
  ],

  socialLinks: {
    facebook: "https://www.facebook.com/paramountclear",
    instagram: "https://www.instagram.com/pcl.eaning",
    twitter: "https://x.com/paramountclear",
    whatsapp: "https://wa.me/254712773330",
  },

  seo: {
    title: "ParamountClear Cleaning Services | Professional Cleaning in Nairobi",
    description:
      "Professional cleaning, fumigation and allied services in Nairobi. Commercial, industrial and domestic cleaning by ParamountClear.",
  },
};

export default businessConfig;
