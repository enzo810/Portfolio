import Image from "next/image";
import Section from "./Section";

const Technologies = () => {
  const technologies = [
    { name: "Next.js", icon: "/nextjs.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "Python", icon: "/python.png" },
    { name: "PHP", icon: "/php.png" },
    { name: "Symfony", icon: "/symfony.png" },
    { name: "Laravel", icon: "/laravel.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "SQL", icon: "/sql.png" },
    { name: "Docker", icon: "/docker.png" },
  ];

  return (
    <Section
      title="Technologies"
      id="technologies"
      content={
        <div className="flex flex-wrap border-[0.5px] bg-white/5 p-4 shadow-lg shadow-[#0e0e0e] justify-start gap-4">
          {technologies.map((technology, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative h-16 w-16">
                <Image
                  src={technology.icon}
                  alt={technology.name}
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>
              <p className="mt-2 text-xs">{technology.name}</p>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Technologies;
