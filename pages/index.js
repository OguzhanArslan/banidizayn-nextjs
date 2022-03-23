import Head from 'next/head'
import HomeBanner from '../components/Banner/Home/Banner'
import HomeAbout from '../components/Home/About/About'
import HomeTeam from "../components/Home/Team/Team"
import HomeWhyUs from "../components/Home/WhyUs/WhyUs"
import { Data_Banner, Data_HomeAbout } from "../data/index"

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | BaniDizayn</title>
            </Head>
            <HomeBanner items={Data_Banner} />
            <HomeAbout data={Data_HomeAbout} />
            <HomeTeam />
            <HomeWhyUs />
        </>
    )
}
