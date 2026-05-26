/* ============================================
   Inspirelabs Shared Types
   ============================================ */

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface PlatformData {
  name: string;
  slug: string;
  anchor: string;
  layer: "consumer-intent" | "growth" | "supporting";
  description: string;
  externalUrl: string;
  externalEnabled: boolean;
  appLinks: {
    playStore: string | null;
    appStore: string | null;
  };
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface FormConfig {
  id: string;
  endpoint: string;
  successRedirect: string;
  consentText: string;
  honeypotField: string;
  fields: FormFieldConfig[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface RouteCardItem {
  label: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SeoData {
  title: string;
  description: string;
  noindex?: boolean;
}

export interface RedirectRule {
  source: string;
  destination: string;
}
