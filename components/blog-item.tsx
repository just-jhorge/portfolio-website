import Link from "next/link";

const BlogItem = () => {
  return (
    <button className="w-full p-2 text-sm border-b border-neutral-800 last:border-none">
      <Link
        href="/blog/disconnect-of-disciplines"
        className="flex items-center justify-between"
      >
        <p>Disconnect of disciplines</p>
        <p className="text-neutral-500">17 Aug</p>
      </Link>
    </button>
  );
};

export default BlogItem;
