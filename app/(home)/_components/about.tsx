import { Cursor } from "@/components/cursor";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container space-y-2">
        <p className="flex items-center space-x-2 text-neutral-500">
          <InfoCircledIcon className="h-4 w-4 mr-2" /> about me
        </p>
        <p className="text-sm text-neutral-400 max-w-xl lowercase">
          Hi, i&apos;m a passionate{" "}
          <span className="text-emerald-600 bg-emerald-500/10 px-1 rounded-sm">
            frontend developer 💻
          </span>{" "}
          from Ghana 🇬🇭. I graduated with a BSc in Computer Science from Kwame
          Nkrumah University of Science and Technology 🏫, Ghana, where I honed
          my skills in web development. Currently, I work as a Network
          Administrator with the Ministry of Health, but my true passion lies in
          crafting 🎨 engaging and user-friendly web experiences. When I&apos;m
          not coding, you can find me watching movies, solving complex problems
          with code, cheering for my favorite team{" "}
          <span className="text-blue-600">chelsea fc 🔵</span> in the English
          Premier League, exploring new places, or counting money! I believe in
          continuous learning and am always eager to take on new challenges in
          the world of technology
          <Cursor />
        </p>
      </div>
    </section>
  );
};

export default About;
