import Link from "next/link";
import { FileText } from "lucide-react";
import { Cursor } from "@/components/cursor";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="font-grotesk">
      <section className="flex items-center justify-center py-16">
        <div className="container flex items-start">
          <div className="w-full space-y-5">
            <h5 className="text-sm text-green-800">
              hello world
              <Cursor />
            </h5>
            {/* <h2 className="text-sm text-neutral-400">
              i&apos;m <span className="text-emerald-500">george</span>
              <Cursor />
            </h2> */}
            <div className="max-w-md space-y-2.5 text-neutral-400 text-sm">
              <p className="lowercase">
                the name is{" "}
                <span className="text-orange-500 bg-orange-500/10 px-1 py-0.5 rounded-sm">
                  george sarpong afrifa
                </span>{" "}
                but you can just call me{" "}
                <span className="text-blue-500">kwadwo</span>{" "}
                <span
                  className="italic text-white"
                  title="The correct pronounciation"
                >
                  &apos;KOH-jo&apos;
                </span>
                👍🏾. I am a frontend developer based in Accra, Ghana 🇬🇭, a
                beautiful country in west africa 🌍
              </p>
              {/* <p>
                i love to create pixel perfect 👌🏾 web applications and websites
                which users will find very easy and pleasing to use
              </p> */}
              <p>
                here, i document what i am currently working on, things i am
                learning, milestones that have reached, vacations with{" "}
                <span className="text-pink-500">anny 💘</span> and any other
                important thing. go through the page and enjoy. and as always, i
                am just an email away
                <Cursor />
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="outline" className="text-neutral-900">
                hire me
              </Button>
              <Button variant="default" className="border border-white">
                what i do
              </Button>
            </div>
          </div>
          {/* <div className="w-full hidden">some image</div> */}
        </div>
      </section>
      <section id="about">
        <div className="container">
          <p className="flex items-center space-x-2 text-neutral-500">
            <InfoCircledIcon className="h-4 w-4 mr-2" /> about me
          </p>
          <p className="text-sm text-neutral-400 max-w-xl">
            Hi, i&apos;m a passionate frontend developer from Ghana. I graduated
            with a BSc in Computer Science from Kwame Nkrumah University of
            Science and Technology, Ghana, where I honed my skills in web
            development. Currently, I work as a Network Administrator with the
            Ministry of Health, but my true passion lies in crafting engaging
            and user-friendly web experiences. When I&apos;m not coding, you can
            find me watching movies, solving complex problems with code,
            cheering for my favorite teams in the English Premier League,
            exploring new places, or counting money! I believe in continuous
            learning and am always eager to take on new challenges in the world
            of technology
            <Cursor />
          </p>
        </div>
      </section>
      <section>
        <div className="container py-16 space-y-2">
          <p className="flex items-center space-x-2 text-neutral-500">
            <FileText className="h-4 w-4 mr-2" /> resume
          </p>
          <div className="space-y-5">
            <p className="text-sm max-w-xl text-neutral-400">
              my passion for creating solutions 💡 to everyday problems has led
              me to work with some reputable clients. seeing my imagination or
              that of my client come to life, digital life obviously 😂, is
              something i find really fascinating. you can download my result to
              learn more about my professional life
              <Cursor />
            </p>
            <Button asChild className="border border-white text-white">
              <Link href="resume.pdf" download>
                see resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
