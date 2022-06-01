import Head from 'next/head'
import PageHeader from "../components/Layout/PageHeader/PageHeader"
import BlogList from "../components/Blog/List/List";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Bani Design</title>
      </Head>
      <PageHeader title="Blog" image="blog" />
      <BlogList />
    </>
  )
}