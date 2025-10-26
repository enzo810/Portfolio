"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Section from "./Section";

const Projects = () => {
  const [isLg, setIsLg] = useState<boolean>(false);

  const projects = [
    {
      title: "Nextlead",
      video: "/nextlead.mov",
      href: "https://dashboard.nextlead.app/fr",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    },
    {
      title: "Spotify",
      video: "/spotify.mov",
      href: "https://github.com/enzo810/Spotify",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "Bataille navale",
      video: "/battleship.mp4",
      href: "https://github.com/enzo810/Battleship",
      technologies: ["JavaScript"],
    },
    {
      title: "Twitter",
      video: "/twitter.mp4",
      href: "https://github.com/enzo810/Twitter",
      technologies: ["PHP", "MySQL", "JavaScript"],
    },
    {
      title: "Sprite Sheet generator",
      video: "/sprite-sheet-generator.mp4",
      href: "https://github.com/enzo810/Sprite-Sheet-Generator",
      technologies: ["PHP"],
    },
  ];

  useEffect(() => {
    setIsLg(window.innerWidth >= 1024);
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section
      title="Projets"
      id="projets"
      content={
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: isLg ? 2 : 1,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full lg:basis-1/2">
                <div className="flex-1 border-[0.5px] bg-white/5 shadow-lg shadow-[#0e0e0e] h-fit">
                  <div className="flex flex-col gap-4 p-4">
                    <video
                      src={project.video}
                      controls
                      className="w-full h-auto"
                    />
                    <div className="flex justify-between items-center gap-4">
                      <h4 className="text-lg">{project.title}</h4>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm flex items-center gap-2"
                      >
                        <i className="fa-brands fa-github" />
                        {project.title === "Nextlead" ? (
                          <span>Voir le site</span>
                        ) : (
                          <span>Voir sur GitHub</span>
                        )}
                      </a>
                    </div>
                    <span className="text-sm">
                      {project.technologies.join(", ")}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 top-[45%] text-black" />
          <CarouselNext className="right-2 top-[45%] text-black" />
        </Carousel>
      }
    />
  );
};

export default Projects;
