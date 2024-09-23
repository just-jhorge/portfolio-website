import { Cursor } from "@/components/cursor";
import { Handshake, HardHat } from "lucide-react";

const Into = () => {
  return (
    <section className="flex items-center justify-center pt-16 pb-8">
      <div className="container flex items-start">
        <div className="w-full space-y-5">
          <h5 className="text-sm text-green-800">
            hello world
            <Cursor />
          </h5>
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
            <p>
              here, i document what i am currently working on, things i am
              learning, milestones that have reached, vacations with{" "}
              <span className="text-pink-500">anny 💘</span> and any other
              important thing. go through the page and enjoy. and as always, i
              am just an email away
              <Cursor />
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center text-xs border text-neutral-300 border-neutral-700 px-2 py-1 rounded-sm bg-neutral-800 hover:bg-neutral-800/60">
              <Handshake className="h-3 w-3 mr-2" /> hire me
            </button>
            <button className="flex items-center text-xs border text-neutral-300 border-neutral-700 px-2 py-1 rounded-sm bg-neutral-800 hover:bg-neutral-800/60">
              <HardHat className="h-3 w-3 mr-2" /> what i do
            </button>
          </div>
        </div>
        {/* <div className="w-full hidden">some image</div> */}
      </div>
    </section>
  );
};

export default Into;
