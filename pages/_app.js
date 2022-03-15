import "../assets/scss/main.scss";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function App({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}