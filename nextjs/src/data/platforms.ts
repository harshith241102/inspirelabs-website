import type { PlatformData } from "@/types";

export const platforms: PlatformData[] = [
  {
    name: "GrabOn",
    slug: "grabon",
    anchor: "/platforms#grabon",
    layer: "consumer-intent",
    description:
      "Flagship consumer-intent surface across India, global, and UAE properties.",
    externalUrl: "https://www.grabon.in",
    externalEnabled: true,
    appLinks: {
      playStore: null, // Pending exact URLs
      appStore: null,
    },
  },
  {
    name: "Alternatives.co",
    slug: "alternatives",
    anchor: "/platforms#alternatives",
    layer: "consumer-intent",
    description:
      "Consumer-intent surface for alternatives, comparisons, and discovery.",
    externalUrl: "https://alternatives.co",
    externalEnabled: true,
    appLinks: {
      playStore: null,
      appStore: null,
    },
  },
  {
    name: "GrabCash",
    slug: "grabcash",
    anchor: "/platforms#grabcash",
    layer: "growth",
    description:
      "Affiliate cashback platform that turns savings and incentives into repeat engagement.",
    externalUrl: "https://grabcash.in",
    externalEnabled: true,
    appLinks: {
      playStore: null, // Pending exact URLs
      appStore: null,
    },
  },
  {
    name: "GrabShare",
    slug: "grabshare",
    anchor: "/platforms#grabshare",
    layer: "growth",
    description:
      "Social commerce platform for creator and community-led product discovery.",
    externalUrl: "https://grabshare.in",
    externalEnabled: true,
    appLinks: {
      playStore: null,
      appStore: null,
    },
  },
  {
    name: "RankDrive",
    slug: "rankdrive",
    anchor: "/platforms#rankdrive",
    layer: "supporting",
    description:
      "Supporting intelligence platform for search, performance monitoring, and revenue optimization.",
    externalUrl: "https://rankdrive.com",
    externalEnabled: false, // Do not render outbound CTA until approved
    appLinks: {
      playStore: null,
      appStore: null,
    },
  },
  {
    name: "WriteGenius",
    slug: "writegenius",
    anchor: "/platforms#writegenius",
    layer: "supporting",
    description:
      "AI-assisted content and workflow platform for scalable content operations.",
    externalUrl: "https://writegenius.ai",
    externalEnabled: true,
    appLinks: {
      playStore: null,
      appStore: null,
    },
  },
];
