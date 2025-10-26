import { ReactNode } from "react";

type SectionProps = {
  title: string;
  id: string;
  content: ReactNode;
};

const Section = ({ title, id, content }: SectionProps) => {
  return (
    <article id={id}>
      <div className="flex justify-end border-b-[0.25px] mb-2">
        <h3 className="font-thin text-xl">{title}</h3>
      </div>
      <>{content}</>
    </article>
  );
};

export default Section;
