import Head from 'next/head'
import PageHeader from "../components/Layout/PageHeader/PageHeader"

export default function Blog() {
  return (
    <>
      <Head>
        <title>Products | Bani Design</title>
      </Head>
      <PageHeader title="Products" image="blog" />
    </>
  )
}