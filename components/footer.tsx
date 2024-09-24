import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="py-4 text-xs text-muted-foreground">
      <div className="container flex items-start justify-between">
        <div className="space-y-0.5">
          <p>&copy; 2024 GSAfrifa. All rights reserved.</p>
          <p>
            👩🏾‍🍳 Cooked by <span className="text-orange-500">me</span> with
            inspiration from{" "}
            <Link href="https://degreat.co.uk">
              <span className="text-blue-500">GR</span>
            </Link>
            &apos;s website.
          </p>
        </div>
        <div className="flex items-center space-x-4 *:transition-colors *:duration-300">
          <Link
            target="_blank"
            href="https://www.instagram.com/just_jhorge"
            className="hover:text-pink-600"
          >
            <InstagramLogoIcon className="h-5 w-5" />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/just_jhorge"
            className="hover:text-blue-500"
          >
            <TwitterLogoIcon className="h-5 w-5" />
          </Link>
          <Link href="/" className="hover:text-blue-300">
            <LinkedInLogoIcon className="h-5 w-5" />
          </Link>
          <Link href="/" className="hover:text-white">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
