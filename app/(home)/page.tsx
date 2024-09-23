import Into from "./_components/intro";
import About from "./_components/about";
import Resume from "./_components/resume";
import Featured from "./_components/featured";
import Blogs from "./_components/blogs";

export default function Home() {
  return (
    <main className="leading-relaxed">
      <Into />
      <About />
      <Featured />
      <Resume />
      <Blogs />
    </main>
  );
}
