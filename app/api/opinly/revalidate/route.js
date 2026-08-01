import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const secret = process.env.OPINLY_WEBHOOK_SECRET;
  const headerSecret =
    request.headers.get("x-opinly-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!secret || headerSecret !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const changed = body?.data?.changed || [];
  const paths = new Set(["/blog"]);

  for (const item of changed) {
    if (item?.type === "post" && item.slug) {
      paths.add(`/blog/${item.slug}`);
    } else if (item?.type === "category" && item.slug) {
      paths.add(`/blog/category/${item.slug}`);
    } else if (item?.type === "author" && item.slug) {
      paths.add(`/blog/authors/${item.slug}`);
    }
  }

  for (const legacyPath of body?.data?.paths || []) {
    if (typeof legacyPath === "string" && legacyPath.startsWith("/")) {
      paths.add(legacyPath.startsWith("/blog") ? legacyPath : `/blog${legacyPath}`);
    }
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, paths: [...paths] });
}
