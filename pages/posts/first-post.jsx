import Head from "next/head"

export async function getStaticProps() {
  console.log("[FirstPostPage] getStaticProps()")
  return {
    props: {
      post: {
        title: "First Post!!",
        body: "My first post, as static props"
      }
    }
  }
}

function FirstPostPage({post}) {
  console.log("[FirstPostPage] render:", post)
  return (
    <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <h1>{post.body}</h1>
    </>
  )
}

export default FirstPostPage