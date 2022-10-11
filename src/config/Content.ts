//import images
import membership_portal from "../assets/project_images/membership_portal.png";

//put all page content here
export const MeContent = {
  fname: "John",
  lname: "Ramberger",
  email: "rambergerjohn@gmail.com",
  gtemail: "jramberger3@gatech.edu",
  links: {
    github: "https://github.com/JohnRamberger",
    this: "https://github.com/JohnRamberger/2022-Portfolio",
    linkedin: "https://www.linkedin.com/in/johnramberger/",
  },
};

export const NavbarContent: NavbarContentProps = {
  title: `${MeContent.fname} ${MeContent.lname}`,
  links: [
    {
      label: "About",
      url: "#about",
    },
    {
      label: "Experience",
      url: "#experience",
    },
    {
      label: "Projects",
      url: "#projects",
    },
  ],
};

type NavbarContentProps = {
  title: string;
  links: Link[];
};

export const HeroContent: HeroContentProps = {
  major: `Hey, I'm ${MeContent.fname}`,
  links: [
    {
      label: "Email",
      type: "a",
      url: `mailto:${MeContent.email}`,
    },
    {
      label: "Github",
      type: "a",
      url: MeContent.links.github,
      target: "_blank",
    },
    {
      label: "Resume",
      type: "a",
      url: "https://google.com",
      target: "_blank",
    },
  ],
};

type HeroContentProps = {
  major: string;
  minor?: string;
  button?: Link;
  links?: Link[];
};

export const ExperienceContent = {};

export const ProjectContent: ProjectContentProps = {
  projects: [
    {
      name: "Data Science at Georgia Tech Membership Portal",
      image: membership_portal,
      type: "team",
      start: "May 2022",
      end: "Present",
      desc: "Developed full-stack system to manage members and provided API to allow other services to connect to portal.",
      lines: [
        "Implemented front-end site using React.js and served through Express.js (written in TypeScript and SCSS).",
        "Used PostgreSQL to store user data; accessed data through custom API.",
        "Throttled API requests and traffic using rate limiting.",
        "Used Node.js to manage packages and deployed application through Heroku (CI/CD).",
        "Tested using JEST and provided API Documentation including JSDoc and code comments.",
      ],
    },
    {
      name: "Data Science at Georgia Tech Membership Portal",
      image: membership_portal,
      type: "team",
      start: "May 2022",
      end: "Present",
      desc: "Developed full-stack system to manage members and provided API to allow other services to connect to portal.",
      lines: [
        "Implemented front-end site using React.js and served through Express.js (written in TypeScript and SCSS).",
        "Used PostgreSQL to store user data; accessed data through custom API.",
        "Throttled API requests and traffic using rate limiting.",
        "Used Node.js to manage packages and deployed application through Heroku (CI/CD).",
        "Tested using JEST and provided API Documentation including JSDoc and code comments.",
      ],
    },
    {
      name: "Data Science at Georgia Tech Membership Portal",
      image: membership_portal,
      type: "team",
      start: "May 2022",
      end: "Present",
      desc: "Developed full-stack system to manage members and provided API to allow other services to connect to portal.",
      lines: [
        "Implemented front-end site using React.js and served through Express.js (written in TypeScript and SCSS).",
        "Used PostgreSQL to store user data; accessed data through custom API.",
        "Throttled API requests and traffic using rate limiting.",
        "Used Node.js to manage packages and deployed application through Heroku (CI/CD).",
        "Tested using JEST and provided API Documentation including JSDoc and code comments.",
      ],
    },
  ],
};

export type ProjectContentProps = {
  projects: Project[];
};

export type Project = {
  name: string;
  image?: string;
  type: "personal" | "team" | "class";
  //the start date
  start?: string;
  //the end date
  end?: string;
  desc: string;
  lines?: string[];
};

export const FooterContent: FooterContentProps = {
  message: "Thanks for getting to know me a little better!",
  sections: [
    {
      label: "John Ramberger",
      links: [
        {
          label: "Home",
          url: `#`,
        },
        {
          label: "Experience",
          url: `#experience`,
        },
        {
          label: "Projects",
          url: "#projects",
        },
      ],
    },
    {
      label: "Connect",
      links: [
        {
          label: "Email",
          type: "a",
          url: `mailto:${MeContent.email}`,
        },
        {
          label: "Github",
          type: "a",
          url: MeContent.links.github,
          target: "_blank",
        },
        {
          label: "LinkedIn",
          type: "a",
          url: MeContent.links.linkedin,
          target: "_blank",
        },
      ],
    },
    {
      label: "Themes",
      links: [
        {
          label: "Simple",
          url: "/0",
        },
        {
          label: "Sci Fi",
          url: "/1",
        },
      ],
    },
  ],
};

type FooterContentProps = {
  message: string;
  sections: FooterSection[];
};

type FooterSection = {
  label: string;
  links?: Link[];
};

export type Link = {
  label: string;
  url: string;
  type?: "a" | "Link";
  target?: "_blank";
};
