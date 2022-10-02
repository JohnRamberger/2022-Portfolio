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

export const NavbarContent = {
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

export const FooterContent = {
  sections: [
    {
      label: "socials",
      links: [
        {
          label: "test",
          url: "#link1",
        },
      ],
    },
  ],
};
