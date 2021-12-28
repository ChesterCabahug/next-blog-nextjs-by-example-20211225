import Head from "next/head";

function Homepage() {
  return (
    <>
    <Head>
      <title>My Blog</title>
      <meta name="description" value="This is my blog"/>
    </Head>
      <main>
        <h1>Chester's blog</h1>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </main>
    </>
  );
}

export default Homepage;
