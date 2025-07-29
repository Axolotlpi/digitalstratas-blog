import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Digital Stratas",
  EMAIL: "axolotltau@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Digital Stratas makes sure web tech makes life eaiser, not harder",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of tips and suggestions on how to use new and old technologes. Coming from people who use them.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A sample of projects that may help you, and show what we can do for you.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/axolotltau",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/axolotlpi"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/caleb-favela",
  }
];
