import type { MetricItem } from "@/types";

export const siteMetrics: MetricItem[] = [
  { value: 12, suffix: "+", label: "years building growth platforms" },
  { value: 76, suffix: "M+", label: "lifetime users across surfaces" },
  { value: 25, suffix: "M+", label: "monthly sessions" },
  { value: 3800, suffix: "+", label: "brands and merchants" },
  { value: 145, suffix: "+", label: "strategic partnerships" },
  { value: 96, suffix: "M+", label: "transactions per year" },
  { value: 4.8, suffix: "B", label: "GMV influenced in FY25-26" },
];

/* Subset for hero proof band */
export const heroMetrics: MetricItem[] = [
  siteMetrics[0], // 12+ years
  siteMetrics[1], // 76M+ users
  siteMetrics[2], // 25M+ sessions
  siteMetrics[3], // 3,800+ brands
];
