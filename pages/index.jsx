import Head from "next/head";
import Link from "next/link";

function Homepage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>Chester's blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">
            <a >First Post</a>
            </Link>
          </li>
          <li>two</li>
          <li>three</li>
        </ul>
      </main>
    </>
  );
}

export default Homepage;
