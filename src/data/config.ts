const config = {
  title: "I'm Siddharth | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Siddharth, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Siddharth, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Siddharth",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Siddharth",
  email: "siddharthchaudhari110@gmail.com",
  site: "https://imhuzaifportfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/siddharth-chaudhari",
    linkedin: "https://www.linkedin.com/in/siddharth-chaudharii/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  },
};
export { config };
