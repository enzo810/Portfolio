import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex max-w-6xl mx-auto my-10 md:my-[10vh] gap-4 lg:gap-12 px-2 flex-col md:flex-row md:h-[80vh]">
      <Header />
      <Main />
    </div>
  );
}
