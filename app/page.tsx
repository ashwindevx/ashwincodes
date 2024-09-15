import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <p className="leading-5 text-neutral-700 font-bold mb-4">
        ashwin chauhan
      </p>
      <p className="mb-4 text-neutral-500">{`frontend engineer based in Bengaluru, India.`}</p>
      <p className="mb-4 text-neutral-500">
        {`currently i work at `}
        <a
          href="https://paywithatoa.co.uk/"
          target="_blank"
          className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
        >
          {`Atoa`}
        </a>
        .
      </p>
      <p className="mb-4 text-neutral-500">
        {`previously i worked at `}
        <a
          href="https://www.navgurukul.org/"
          target="_blank"
          className="text-neutral-900 underline underline-offset-4 decoration-neutral-200"
        >
          {`NavGurukul`}
        </a>
        .
      </p>
    </section>
  );
}
