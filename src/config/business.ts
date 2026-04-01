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
  name: "Frevans Cleaning Company",
  tagline: "Leading Professional Cleaning in Nairobi",
  description:
    "We specialize in office and house cleaning, sofa cleaning, carpet cleaning, and post‑construction cleaning. Quality service you can trust.",
  phone: "0796 871239",
  email: "frevanscleaning@gmail.com",
  address: "Moi Avenue, South C South B, Nairobi",
  city: "Nairobi",
  areasServed: "Nairobi and nearby areas",
  hours: "Mon–Sat: 9:00 AM – 5:00 PM",
  rating: 4.8,
  reviewCount: 31,
  yearFounded: "",
  heroImage,
  about:
    "Frevans Cleaning Company is a leading professional cleaning company in Nairobi, Kenya. We specialize in office and house cleaning, sofa cleaning, carpet cleaning, and post‑construction cleaning. Our team is dedicated to delivering exceptional results, whether you need regular maintenance or a one‑time deep clean. We take pride in our attention to detail, reliability, and commitment to customer satisfaction. With a focus on quality and professionalism, we ensure every space we clean is left spotless and fresh. Trust Frevans to handle all your cleaning needs in Nairobi and beyond.",

  services: [
    {
      title: "Office Cleaning",
      description:
        "Professional cleaning for offices, commercial spaces, and work environments. We help create a clean, healthy, and productive atmosphere.",
      image: serviceOffice,
      icon: "Building2",
    },
    {
      title: "House Cleaning",
      description:
        "Thorough residential cleaning services that cover every room. From regular upkeep to deep cleaning, your home will shine.",
      image: serviceResidential,
      icon: "Home",
    },
    {
      title: "Sofa & Carpet Cleaning",
      description:
        "Deep cleaning for sofas, upholstery, and carpets. Remove stains, dust, and allergens to restore freshness and extend life.",
      image: serviceFumigation,
      icon: "Sofa",
    },
    {
      title: "Post‑Construction Cleaning",
      description:
        "Comprehensive cleaning after construction or renovation. We remove dust, debris, and residues so your space is move‑in ready.",
      image: serviceIndustrial,
      icon: "Hammer",
    },
  ],

  reviews: [
    {
      name: "Grace Muthoni",
      rating: 5,
      text: "Frevans did an excellent job with our office cleaning. Professional, punctual, and very thorough. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "John Ndirangu",
      rating: 5,
      text: "I hired them for sofa and carpet cleaning. My furniture looks brand new! Great service and friendly team.",
      date: "1 month ago",
    },
    {
      name: "Ann Wanjiku",
      rating: 4,
      text: "They did a good job with post-construction cleaning. The house was spotless and ready for us to move in.",
      date: "3 weeks ago",
    },
    {
      name: "Peter Kamau",
      rating: 5,
      text: "Very reliable cleaning company. They come on time and do a thorough job every week. My home is always fresh.",
      date: "1 month ago",
    },
    {
      name: "Lucy Njeri",
      rating: 5,
      text: "Best cleaning service in Nairobi! They cleaned my carpets and sofas, and the results were amazing. Will use them again.",
      date: "2 months ago",
    },
  ],

  socialLinks: {
    facebook: "",
    instagram: "https://www.instagram.com/frevanscleaning",
    twitter: "",
    whatsapp: "https://wa.me/254796871239",
  },

  seo: {
    title: "Frevans Cleaning Company | Professional Office & House Cleaning in Nairobi",
    description:
      "Leading cleaning company in Nairobi offering office cleaning, house cleaning, sofa & carpet cleaning, and post-construction cleaning. Reliable, professional service. Call 0796 871239.",
  },
};

export default businessConfig;