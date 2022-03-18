import Head from 'next/head'
import HomeBanner from '../components/Banner/Home/Banner'
import { Data_Banner } from "../data/index"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BaniDizayn</title>
      </Head>
      <HomeBanner items={Data_Banner} />
    </>
  )
}
