import Head from 'next/head'
import PageHeader from "../components/Layout/PageHeader/PageHeader"

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | BaniDesign</title>
      </Head>
      <PageHeader title="Blog" image="blog" />
    </>
  )
}