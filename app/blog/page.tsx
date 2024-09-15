import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Ashwin Codes | Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
