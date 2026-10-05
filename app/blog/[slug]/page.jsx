import { notFound } from "next/navigation";
import { BlogPostView } from "../../../src/components/blog/BlogPostView";
import { BLOG_POSTS, blogPostPath, getBlogPost } from "../../../src/data/blogPosts";
import { buildBlogPostMetadata } from "../../../src/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not found" };
  return buildBlogPostMetadata(post, blogPostPath(slug));
}

export default async function BlogPostPage(props) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostView post={post} />;
}
