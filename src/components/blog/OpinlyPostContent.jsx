import { OpinlyContent } from "@opinly/react";
import { opinlyConfig } from "@opinly/next";

const config = {
  imagesPrefix: opinlyConfig.imagesPrefix,
  siteUrl: opinlyConfig.siteUrl,
  blogPrefix: opinlyConfig.blogPrefix,
  siteName: opinlyConfig.siteName,
};

export function OpinlyPostContent({ content }) {
  if (!content) return null;

  return (
    <div className="prose prose-lg prose-neutral max-w-none prose-headings:text-neutral-900 prose-a:text-amber-800">
      <OpinlyContent
        content={content}
        config={config}
        classNames={{
          paragraph: "text-lg leading-relaxed text-neutral-700",
          heading: "font-bold text-neutral-900",
        }}
      />
    </div>
  );
}
