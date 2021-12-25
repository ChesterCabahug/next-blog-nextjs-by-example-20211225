import Link from "next/link";

function Homepage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Chester's blog</h1>
      </main>
    </>
  );
}

export default Homepage;
