import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      <p className="text-neutral-500">nothing to read here, yet.</p>
      {/* {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-6"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-500 tabular-nums mb-1">
                {formatDate(post.metadata.publishedAt)}
              </p>
              <p className="text-neutral-900">{post.metadata.title}</p>
            </div>
          </Link>
        ))} */}
    </div>
  );
}
