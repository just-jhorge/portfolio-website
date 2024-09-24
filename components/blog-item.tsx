import { Blog } from "@/types";
import Link from "next/link";

interface BlogItemProps {
  blog: Blog;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <button className="w-full p-2 text-sm border-b border-neutral-800 last:border-none">
      <Link
        href={`/blog/${blog.slug}`}
        className="flex items-center justify-between gap-5"
      >
        <p className="flex-1 text-left w-full truncate">
          {blog.metadata.title}
        </p>
        <p className="text-neutral-500">{blog.metadata.date}</p>
      </Link>
    </button>
  );
};

export default BlogItem;
