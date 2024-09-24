import { Blog } from "@/types";
import { getAllBlogs } from "@/lib/blogs";
import BlogItem from "@/components/blog-item";

export default function Page() {
  const blogs: Blog[] = getAllBlogs();

  return (
    <section className="container space-y-10 py-20">
      <h1>Blogs published ({blogs.length})</h1>
      <div>
        {blogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
}
