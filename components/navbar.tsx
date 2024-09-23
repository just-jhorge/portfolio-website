import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <nav className="w-full top-0 h-16 flex items-center justify-center">
      <div className="h-full container flex items-center justify-between">
        <Link href="/" className="text-base">
          &gt;_
          <span className="text-yellow-600">george</span>
        </Link>
        <div className="flex items-center space-x-5 *:transition-colors *:duration-300 *:text-sm">
          <Link href="/#about" className="hover:text-emerald-500">
            about
          </Link>
          <Link href="/blog" className="hover:text-emerald-500">
            blog
          </Link>
          <Link href="/projects" className="hover:text-emerald-500">
            projects
          </Link>
          <Link href="/travel" className="hover:text-emerald-500">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
