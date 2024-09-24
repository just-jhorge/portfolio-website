import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import { Blog, BlogMetaData } from "@/types";

const blogsDirectory = path.join(process.cwd(), "public", "content");

export function getBlogSlugs(): string[] {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string): Blog {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const metadata: BlogMetaData = {
    title: data.title,
    date: data.date,
    description: data.description,
  };

  const htmlContent = marked(content);

  return {
    slug,
    metadata,
    content: htmlContent,
  };
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();

  return slugs.map((slug) => getBlogBySlug(slug.replace(/\.md$/, "")));
}
