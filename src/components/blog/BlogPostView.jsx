import { BlogPostLayout } from "../BlogPostLayout";
import { JsonLd } from "../JsonLd";
import { ROUTES } from "../../config/routes";
import { SITE_URL, getArticleSchema } from "../../seo";
import { blogPostPath } from "../../data/blogPosts";

export function BlogPostView({ post }) {
  return (
    <>
      <JsonLd
        data={getArticleSchema({
          title: post.title,
          description: post.description,
          url: `${SITE_URL}${blogPostPath(post.slug)}`,
          datePublished: post.publishedAt,
        })}
      />
      <BlogPostLayout
        title={post.title}
        dek={post.description}
        relatedLinks={[
          ...(post.relatedLinks || []),
          { to: ROUTES.blog, label: "All blog articles" },
        ]}
      >
        {post.body}
      </BlogPostLayout>
    </>
  );
}
