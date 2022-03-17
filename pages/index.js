import Head from 'next/head'
import HomeBanner from '../components/Banner/Home/Banner'

const banner = [
  {
    title: "Modern minimalist home",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: "01"
  },
  {
    title: "Modern minimalist home 2",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: "01"
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BaniDizayn</title>
      </Head>
      <HomeBanner items={banner} />
    </>
  )
}
