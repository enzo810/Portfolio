import Section from "./Section";

const Introduction = () => {
  return (
    <Section
      title="Introduction"
      id="introduction"
      content={
        <div className="border-[0.5px] bg-white/5 p-4 shadow-lg shadow-[#0e0e0e]">
          <p className="text-base">
            Je m&apos;appelle <span className="font-semibold">Enzo Sousa</span>,
            développeur web full-stack de 20 ans actuellement en alternance chez{" "}
            <span className="font-semibold">Creach Agency</span>, une start-up
            innovante spécialisée dans le développement web.
          </p>
          <p className="mt-2 text-base">
            J&apos;y participe activement à la conception et à l&apos;évolution
            de <span className="font-semibold">Nextlead</span>, un{" "}
            <abbr title="Customer Relaionship Management">CRM</abbr> moderne
            destiné à simplifier la gestion des prospects et des clients pour
            les entreprises sous différentes manières.
          </p>
          <p className="mt-2 text-base">
            Je suis également entrain de suivre la formation{" "}
            <abbr title="Pré Masters of Science" className="font-semibold">
              Pré-MSc
            </abbr>{" "}
            d&apos;{" "}
            <abbr
              title="École pour l'informatique et les nouvelles technologies"
              className="font-semibold"
            >
              EPITECH
            </abbr>
          </p>
        </div>
      }
    />
  );
};

export default Introduction;
