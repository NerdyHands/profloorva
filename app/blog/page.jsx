import { BlogIndex } from "../../src/components/blog/BlogIndex";
import { PageWithJsonLd, pageMetadata } from "../../src/lib/page";
import { ROUTES } from "../../src/config/routes";
import { BLOG_POSTS } from "../../src/data/blogPosts";

export const metadata = pageMetadata(ROUTES.blog);

export default function BlogPage() {
  return (
    <PageWithJsonLd pathname={ROUTES.blog}>
      <BlogIndex posts={BLOG_POSTS} />
    </PageWithJsonLd>
  );
}
