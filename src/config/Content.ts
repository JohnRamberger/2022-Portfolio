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
      url: "#About",
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
      label: "Resume",
      url: "",
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

export const ProjectContent = {};

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

type Link = {
  label: string;
  url: string;
  type?: "a" | "Link";
  target?: "_blank";
};
