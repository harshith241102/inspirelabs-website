/* Route constants for all pages */

export const ROUTES = {
  // Header pages
  home: "/",
  about: "/about",
  platforms: "/platforms",
  growthEngine: "/growth-engine",
  aiOperations: "/ai-operations",
  careers: "/careers",
  strategicRelations: "/strategic-relations",
  contact: "/contact",

  // Footer-only pages
  foundersLetter: "/founders-letter",
  press: "/press",
  trustSecurity: "/trust-security",
  privacyPolicy: "/privacy-policy",
  termsOfUse: "/terms-of-use",

  // Technical pages
  maintenance: "/maintenance",
  comingSoon: "/coming-soon",

  // Thank-you pages
  contactThankYou: "/contact/thank-you",
  strategicRelationsThankYou: "/strategic-relations/thank-you",
  pressThankYou: "/press/thank-you",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
