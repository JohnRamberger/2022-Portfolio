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
  title: "Portfolio",
  links: [
    {
      label: "test1",
      url: "#test1",
    },
    {
      label: "test2",
      url: "#test2",
    },
    {
      label: "test3",
      url: "#test3",
    },
  ],
};

type NavbarContentProps = {
  title: string;
  links: Link[];
};

export const HeroContent = {
  major: `Hello! I'm ${MeContent.fname} ${MeContent.lname}`,
  minor: "A SWE located in Atlanta, GA",
  button: {
    label: "Explore",
    url: "#next",
  },
};

export const ExperienceContent = {};

export const ProjectContent = {};

export const FooterContent: FooterContentProps = {
  sections: [
    {
      label: "John Ramberger",
      links: [
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
