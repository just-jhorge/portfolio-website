import { Blog } from "@/types";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blogs";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));

  return slugs;
}

const Page = ({ params: { slug } }: PageProps) => {
  const blog: Blog = getBlogBySlug(slug);

  console.log(blog.content);

  return (
    <article className="container space-y-5 py-16">
      <div className="space-y-0.5">
        <h1 className="text-lg font-medium">{blog.metadata.title}</h1>
        <p className="text-xs text-muted-foreground">{blog.metadata.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="text-sm space-y-4"
      ></div>
    </article>
  );
};

export default Page;
