import Image from "next/image";
import Section from "./Section";

const Formations = () => {
  return (
    <Section
      title="Formations"
      id="formations"
      content={
        <div className="border-[0.5px] bg-white/5 shadow-lg shadow-[#0e0e0e] flex flex-col sm:flex-row">
          <div className="w-full h-36 sm:w-1/3 sm:h-64 object-cover flex-none relative">
            <Image
              src="/epitech.png"
              alt="Logo d'EPITECH"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-col justify-around p-4 gap-4">
            <div>
              <h4 className="text-xl">Web@cademie – EPITECH Paris</h4>
              <p className="text-sm">
                Formation intensive sur 2 années dont une en alternance,
                spécialisée dans le développement web.
              </p>
            </div>

            <div>
              <h4 className="text-xl">Pré-Msc – EPITECH Paris</h4>
              <p className="text-sm">
                Année préparatoire à la MSc, un cursus avancé en programmation,
                sur 2 années d&apos;alternance.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Formations;
