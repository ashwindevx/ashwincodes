import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-16">
      <ul className="flex flex-row text-neutral-500 space-x-4">
        <li>
          <Link
            key="home"
            href="/"
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            key="blog"
            href="/blog"
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
          >
            blog
          </Link>
        </li>
        <li>
          <a
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ashwindevx"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ashwin-chauhan-81b137147/"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            rss
          </a>
        </li>
      </ul>
    </footer>
  );
}
