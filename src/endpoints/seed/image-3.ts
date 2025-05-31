import type { Media } from '@/payload-types'

// Constants for reuse and readability
const captionLink = {
  type: "link",
  fields: {
    url: "https://seans-portfolio-with-nextjs.vercel.app/",
    newTab: true,
    linkType: "custom",
  },
  format: "",
  indent: 0,
  version: 2,
  children: [
    {
      mode: "normal",
      text: "Sean Ippolito",
      type: "text",
      style: "",
      detail: 0,
      format: 0,
      version: 1,
    },
  ],
  direction: "ltr" as const,
};

const captionText = [
  {
    mode: "normal",
    text: "Photo by ",
    type: "text",
    style: "",
    detail: 0,
    format: 0,
    version: 1,
  },
  captionLink,
  {
    mode: "normal",
    text: " on SoSAi.",
    type: "text",
    style: "",
    detail: 0,
    format: 0,
    version: 1,
  },
];

const captionRoot = {
  type: "root",
  format: "" as const,
  indent: 0,
  version: 1,
  children: [
    {
      type: "paragraph",
      format: "",
      indent: 0,
      version: 1,
      children: captionText,
      direction: "ltr" as const,
      textFormat: 0,
    },
  ],
  direction: "ltr" as const,
};

export const image3: Omit<Media, "createdAt" | "id" | "updatedAt"> = {
  alt: "A picture of my best friend, Bolt!",
  caption: { root: captionRoot },
} as const;