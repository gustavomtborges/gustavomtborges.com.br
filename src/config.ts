import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://gustavomtborges.com.br/",
  author: "Gustavo Martins T. Borges",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Gustavo Martins T. Borges",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-US"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/gustavomtborges",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gustavomtborges",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contato@gustavomtborges.com.br",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/gustavomtborges",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/gustavomtborges",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/gustavomtborges",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
