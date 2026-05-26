import type { NavLink, CtaItem } from "@/types";
import { ROUTES } from "./routes";

export const headerLinks: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Platforms", href: ROUTES.platforms },
  { label: "Growth Engine", href: ROUTES.growthEngine },
  { label: "AI Operations", href: ROUTES.aiOperations },
  { label: "Culture & Careers", href: ROUTES.careers },
  { label: "Strategic Relations", href: ROUTES.strategicRelations },
  { label: "Contact", href: ROUTES.contact },
];

export const primaryCta: CtaItem = {
  label: "Partner with us",
  href: "/contact#partner",
  variant: "primary",
};

export const confidentialCta: CtaItem = {
  label: "Request a confidential briefing",
  href: "/strategic-relations#briefing",
  variant: "secondary",
};
