import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Chapter {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Guarantee {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: LucideIcon;
}
