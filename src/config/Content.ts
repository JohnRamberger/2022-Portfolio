//import project images
import membership_portal from "../assets/project_images/membership_portal.png";
import hacklytics_site from "../assets/project_images/hacklytics.png";
import dsgt_site from "../assets/project_images/datasciencegt.png";

//import experience images
import dsgt_logo from "../assets/experience_images/dsgt.png";

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

export const ExperienceContent: ExperienceContentProps = {
  experience: [
    {
      company: "Data Science at Georgia Tech",
      company_image: dsgt_logo,
      position: "Jr. Software Engineer",
      start: "August 2021",
      end: "May 2022",
    },
    {
      company: "Data Science at Georgia Tech",
      company_image: dsgt_logo,
      position: "Director of Technology",
      start: "May 2022",
      end: "present",
    },
    {
      company: "asd",
      position: "Sadad",
    },
  ],
};

export type ExperienceContentProps = {
  experience?: Experience[];
};

export type Experience = {
  company: string;
  company_image?: string;
  position: string;
  start?: string;
  end?: string;
  lines?: string[];
};

export const ProjectContent: ProjectContentProps = {
  projects: [
    {
      name: "DSGT Membership Portal",
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
      name: "DSGT Website",
      image: dsgt_site,
      type: "team",
      start: "May 2022",
      end: "Present",
      desc: "Designed and developed the website for Data Science at Georgia Tech using React.",
    },
    {
      name: "DSGT Hacklytics 2023 Website",
      image: hacklytics_site,
      type: "team",
      start: "May 2022",
      end: "Present",
      desc: "Developed the website for DSGT's 2023 Hacklytics hackathon using React.",
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
