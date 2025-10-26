import Formations from "./Formations";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Main = () => {
  return (
    <main className="flex flex-col gap-3 flex-2 lg:flex-3 md:overflow-y-auto">
      <div className="px-2 hidden md:block text-white">
        <div className="flex gap-2">
          <div className="size-4 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-300 mt-5"></div>
          <div className="flex flex-col leading-none font-extralight">
            <h1 className="text-5xl">Enzo Sousa</h1>
            <h2 className="text-3xl">Développeur web full-stack</h2>
          </div>
        </div>
      </div>
      <Introduction />
      <Formations />
      <Technologies />
      <Projects />
    </main>
  );
};

export default Main;
