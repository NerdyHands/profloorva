import {
  OpinlyJsonLd,
  buildBlogPostingJsonLd,
  buildFaqJsonLd,
} from "@opinly/next";
import { BlogPostLayout } from "../BlogPostLayout";
import { OpinlyPostContent } from "./OpinlyPostContent";
import { ROUTES } from "../../config/routes";

export function BlogPostView({ post }) {
  const dek = post.description || post.dek || post.excerpt || "";

  return (
    <>
      <OpinlyJsonLd data={buildBlogPostingJsonLd(post)} />
      {post.faqs?.length ? <OpinlyJsonLd data={buildFaqJsonLd(post.faqs)} /> : null}
      <BlogPostLayout
        title={post.title}
        dek={dek}
        relatedLinks={[
          { to: ROUTES.blog, label: "All blog articles" },
          { to: ROUTES.services, label: "Our flooring services" },
          { to: ROUTES.contact, label: "Get a free estimate" },
        ]}
      >
        <OpinlyPostContent content={post.content} />
      </BlogPostLayout>
    </>
  );
}
