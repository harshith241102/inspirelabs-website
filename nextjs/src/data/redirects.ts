import type { RedirectRule } from "@/types";

export const redirects: RedirectRule[] = [
  { source: "/founder-letter", destination: "/founders-letter" },
  { source: "/portfolio", destination: "/platforms" },
  { source: "/culture", destination: "/careers" },
  { source: "/investors", destination: "/strategic-relations" },
  { source: "/investor-relations", destination: "/strategic-relations" },
  { source: "/ai-layer", destination: "/ai-operations" },
  { source: "/services", destination: "/growth-engine" },
  { source: "/contact-us", destination: "/contact" },
];
