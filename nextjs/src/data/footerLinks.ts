import type { FooterColumn } from "@/types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Inspirelabs",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Platforms", href: "/platforms" },
      { label: "Growth Engine", href: "/growth-engine" },
      { label: "AI Operations", href: "/ai-operations" },
      { label: "Culture & Careers", href: "/careers" },
      { label: "Strategic Relations", href: "/strategic-relations" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "GrabOn", href: "/platforms#grabon" },
      { label: "Alternatives.co", href: "/platforms#alternatives" },
      { label: "GrabCash", href: "/platforms#grabcash" },
      { label: "GrabShare", href: "/platforms#grabshare" },
      { label: "RankDrive", href: "/platforms#rankdrive" },
      { label: "WriteGenius", href: "/platforms#writegenius" },
    ],
  },
  {
    title: "Growth Engine",
    links: [
      { label: "Awareness", href: "/growth-engine#awareness" },
      { label: "Discovery", href: "/growth-engine#discovery" },
      { label: "Engagement", href: "/growth-engine#engagement" },
      { label: "Acquisition", href: "/growth-engine#acquisition" },
      { label: "Brand Partnerships", href: "/growth-engine#brand-partnerships" },
      { label: "Measurement & Attribution", href: "/growth-engine#measurement" },
    ],
  },
  {
    title: "AI Operations",
    links: [
      { label: "AI Workflows", href: "/ai-operations#workflows" },
      { label: "Agents & Automation", href: "/ai-operations#agents" },
      { label: "Decision Science", href: "/ai-operations#decision-science" },
      { label: "Reporting & Intelligence", href: "/ai-operations#reporting" },
      { label: "Operators & Guardrails", href: "/ai-operations#guardrails" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Founder's Letter", href: "/founders-letter" },
      { label: "Press & Media Kit", href: "/press" },
      { label: "Open Roles", href: "/careers#open-roles" },
      { label: "About Inspirelabs", href: "/about" },
      { label: "Strategic Relations", href: "/strategic-relations" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "Trust & Security", href: "/trust-security" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
];
