import Navbar from "../components/NavBar";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
