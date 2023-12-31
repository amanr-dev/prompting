import Feeds from "@components/Feeds";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompting is an open-source AI prompt based tool for modren world to
        discover, create and share creative prompts
      </p>
      <Feeds />
    </section>
  );
}
