import { readFile } from "fs/promises";
import Head from "next/head";

export async function getStaticProps() {
  console.log("[FirstPostPage] getStaticProps()");
  const data = await readFile("content/posts/first-post.json", "utf-8");
  const post = JSON.parse(data);
  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  console.log("[FirstPostPage] render:", post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.body}</h1>
    </>
  );
}

export default FirstPostPage;
