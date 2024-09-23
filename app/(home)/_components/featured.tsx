import { FolderGit2 } from "lucide-react";
import Link from "next/link";

const Featured = () => {
  return (
    <section className="py-8">
      <div className="container space-y-5 text-sm">
        <div className="space-y-2">
          <p className="flex items-center space-x-2 text-neutral-500">
            <FolderGit2 className="h-4 w-4 mr-2" /> featured works
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 *:rounded-sm">
            <div className="w-full bg-neutral-800 border border-neutral-700 h-52"></div>
            <div className="w-full bg-neutral-800 border border-neutral-700 h-52"></div>
            <div className="w-full bg-neutral-800 border border-neutral-700 h-52"></div>
            <div className="w-full bg-neutral-800 border border-neutral-700 h-52"></div>
          </div>
        </div>
        <p className="text-neutral-400">
          Check out{" "}
          <Link href="/" className="text-white underline">
            more projects
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Featured;
