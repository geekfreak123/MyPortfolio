import Qkart from "@/assets/images/Qkart.png";
import nikeLandingPage from "@/assets/images/nike-landing-page.png";
import XBoard from "@/assets/images/XBoard.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Crio.Do",
    title: "Qkart",
    results: [
      {
        title:
          " Implemented the core logic for authentication, shopping cart and checkout",
      },
      {
        title:
          "Improved UI by adding responsive design elements for uniform experience across different devices",
      },
      {
        title:
          "Utilized REST APIs to dynamically load and render data served by the backend server",
      },
    ],
    liveLink: "https://rohan-sonawane-qkart-frontend.vercel.app/",
    githubLink:
      "https://github.com/geekfreak123/sonawanerohan502-ME_QKART_FRONTEND_V2",
    image: Qkart,
  },
  {
    company: "Self-made",
    title: "Nike Landing Page",
    results: [
      {
        title:
          "React was used to create a dynamic, component-based structure, ensuring scalability and ease of maintenance.",
      },
      {
        title:
          "Tailwind CSS provided a highly customizable and responsive design, allowing for rapid UI development while maintaining the brand's aesthetic.",
      },
      {
        title:
          "The project involved converting design mockups into functional components, ensuring pixel-perfect alignment with the original design",
      },
    ],
    liveLink: "https://nike-landing-page-ten-sigma.vercel.app/",
    githubLink: "https://github.com/geekfreak123/Nike_Landing_Page",
    image: nikeLandingPage,
  },
  {
    company: "Crio.Do",
    title: "XBoard",
    results: [
      {
        title: "Utilized the figma file to understand the design requirements",
      },
      { title: "Used Accordions and Image Carousel to improve UI" },
      {
        title: "Fetched news content from flipboard's RSS feed using REST API",
      },
    ],
    liveLink: "https://xboard-rohan123.netlify.app/",
    githubLink:
      "https://github.com/geekfreak123/sonawanerohan502-ME_BUILDOUT_XBOARD",
    image: XBoard,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects"
          title="Featured Projects"
          description="See how I transform concepts into digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md: size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-6 mt-8">
                    <a href={project.liveLink}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span className="text-center lg:text-sm">
                          Visit Live Site
                        </span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.githubLink}>
                      <button
                        className="bg-white text-gray-950 h-12 w-full
                        md:w-auto px-16 rounded-xl font-semibold inline-flex items-center justify-center"
                      >
                        <GithubIcon className="size-8" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
