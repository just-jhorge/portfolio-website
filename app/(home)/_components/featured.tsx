import FeaturedContent, {
  FeaturedContentType,
} from "@/components/featured-content";
import { FolderGit2 } from "lucide-react";
import Link from "next/link";

const featuredWorks: FeaturedContentType[] = [
  {
    title: "🤲🏾 Fafrime",
    href: "https://fafrime.com",
    label: "fafrime.com",
    active: true,
    description:
      "make money while loaning your assets to your neighbors to use for some time. free to use.",
  },
  {
    title: "⛹🏾‍♀️ My Gym Mart",
    href: "https://mygymmart.io",
    label: "mygymmart.io",
    active: true,
    description:
      "easily locate gyms close to you. manage your gym assets and customer and sell stuff.",
  },
  {
    title: "👩🏾‍⚕️ Nurse Companion",
    href: "https://mygymmart.io",
    label: "nursecompanion.com",
    active: false,
    description:
      "for student and working nurses alike, wherever you are, whatever you want, all in one place.",
  },
];

const Featured = () => {
  return (
    <section className="py-8">
      <div className="container space-y-5 text-sm">
        <div className="space-y-2">
          <p className="flex items-center space-x-2 text-neutral-500">
            <FolderGit2 className="h-4 w-4 mr-2" /> featured works
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 *:rounded-sm">
            {featuredWorks.map((work, idx) => (
              <FeaturedContent key={idx} content={work} />
            ))}
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
