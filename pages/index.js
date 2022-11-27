import Head from 'next/head'
import HomeBanner from '../components/Banner/Home/Banner'
import HomeAbout from '../components/Home/About/About'
import HomeWhyUs from "../components/Home/WhyUs/WhyUs"
import HomeService from "../components/Home/Service/Service"
import HomeContact from "../components/Home/Contact/Contact"
import HomeGallery from "../components/Banner/Gallery/Gallery"


import { Data_Banner, Data_HomeAbout, Data_Gallery } from "../data/index"

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page | Bani Design</title>
            </Head>
            <HomeBanner items={Data_Banner} />
            <HomeAbout data={Data_HomeAbout} />
            <HomeWhyUs />
            <HomeService />
            <HomeContact />
            <HomeGallery items={Data_Gallery} /> 
        </>
    )
}
