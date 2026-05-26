/* Logo wall - text-only mode for v1 (no approved logos yet) */

export const logoWallCategories = [
  "E-commerce",
  "Travel",
  "Finance",
  "Food & Delivery",
  "Fashion & Lifestyle",
  "Electronics & Recharge",
] as const;

/* Logo entries will be added here when brand approvals are received */
export const approvedLogos: { name: string; src: string; category: string }[] = [];
