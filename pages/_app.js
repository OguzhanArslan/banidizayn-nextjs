import Head from 'next/head'

import "../assets/scss/main.scss";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}