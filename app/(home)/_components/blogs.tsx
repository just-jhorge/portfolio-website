import BlogItem from "@/components/blog-item";
import { Rss } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <section id="about" className="py-8">
      <div className="container space-y-5">
        <div className="space-y-2">
          <p className="flex items-center space-x-2 text-neutral-500">
            <Rss className="h-4 w-4 mr-2" /> recent posts
          </p>
          <div className="max-w-xl">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
        <p className="text-neutral-400">
          See{" "}
          <Link href="/blog" className="text-white underline">
            all posts
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Blogs;
