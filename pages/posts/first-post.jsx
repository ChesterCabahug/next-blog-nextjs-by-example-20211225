import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
  console.log("[FirstPostPage] getStaticProps()");
  const post = await getPost("first-post");
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
