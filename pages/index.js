import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Marcel and I'm a Web Developer. You can find me on
          LinkedId in the link:
        </p>
        <a
          href="https://www.linkedin.com/in/marcel-brasileiro/"
          target="_blank"
        >
          Redirect to Perfil on LinkedIn
        </a>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/posts/first-post">
        <a>Go to Post Page</a>
      </Link>
    </Layout>
  );
}
