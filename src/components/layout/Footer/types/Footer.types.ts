import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  badgeType?: "default" | "green";
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}
