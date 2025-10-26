import { cn } from "@/lib/utils";
import { FileDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Contact from "./Contact";

const Header = () => {
  const links = [
    { label: "Technologies", value: "#technologies" },
    { label: "Formations", value: "#formations" },
    { label: "Projets", value: "#projets" },
    { label: "Introduction", value: "#introduction" },
  ];

  return (
    <header className="flex flex-col gap-1 flex-1 max-w-md md:max-w-none mx-auto md:mx-0">
      <div className="blcok md:hidden flex items-center gap-2">
        <div className="flex gap-2">
          <div className="size-4 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-300 mt-5"></div>
          <div className="flex flex-col leading-none font-extralight">
            <h1 className="text-4xl sm:text-5xl">Enzo Sousa</h1>
            <h2 className="text-2xl sm:text-3xl">Développeur web full-stack</h2>
          </div>
        </div>
      </div>
      <div className="rounded-full md:rounded-none w-60 h-60 md:h-[388px] md:w-auto mx-auto md:mx-0 my-4 md:my-0 relative">
        <Image
          src="/profile-picture.jpg"
          alt="Profil photo"
          fill
          className="rounded-full md:rounded-none object-cover"
          quality={90}
        />
      </div>
      <div className="grid grid-cols-4 gap-1">
        <button className="col-span-1 border-[0.5px] bg-white/5 flex items-center justify-center h-11 transition-colors duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent cursor-pointer">
          <Linkedin />
        </button>

        <Contact />
        <button
          className="col-span-1 border-[0.5px] bg-white/5 flex items-center justify-center h-11 hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent cursor-pointer"
          id="open-button"
        >
          <Github />
        </button>
        <a
          href="./ressources/CV.pdf"
          download
          className="col-span-1 border-[0.5px] bg-white/5 flex items-center justify-center h-11 hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent cursor-pointer"
          title="Télécharger mon CV"
        >
          <FileDown />
        </a>
      </div>
      <div className="font-thin">
        {links.map((link, index, array) => {
          const isLast = index === array.length - 1;
          return (
            <a
              key={link.value}
              href={link.value}
              className={cn(
                "h-10 border-x-[0.5px] border-t-[0.5px] flex flex-col justify-center p-2 bg-white/5 hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent transition-colors duration-300 cursor-pointer",
                isLast ? "border-[0.5px]" : "border-x-[0.5px] border-t-[0.5px]"
              )}
            >
              <p>{link.label}</p>
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
