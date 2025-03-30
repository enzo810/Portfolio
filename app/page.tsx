import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import { getComments } from "@/server/server.action";

export const dynamic = "force-dynamic";

const Page = async () => {
  const comments = await getComments();

  return (
    <div className="flex flex-col scroller gap-32 xl:gap-60 pb-8">
      <Home />
      <Projects />
      <Timeline />
      <Contact comments={comments?.data?.comments} />
    </div>
  );
};

export default Page;
