import Head from "next/head"

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: "First Post!!",
        body: "My first post, as static props"
      }
    }
  }
}

function firstPost({post}) {
  // console.log("[FirstPost] render:", props)
  return (
    <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <h1>{post.body}</h1>
    </>
  )
}

export default firstPost