import Navbar from "../components/NavBar";
import "../styles/globals.css";

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
