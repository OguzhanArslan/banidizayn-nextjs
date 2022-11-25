import Head from 'next/head'
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

import "../assets/scss/main.scss";

import { Data_Header, Data_Footer } from "../data/index"


export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="googlebot" content="noindex" />
        </Head>
        <Header data={Data_Header} />
        <Component {...pageProps} />
        <Footer data={Data_Footer} />
    </>
}