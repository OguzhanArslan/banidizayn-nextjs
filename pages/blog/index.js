import Head from 'next/head'
import PageHeader from "../../components/Layout/PageHeader/PageHeader"
import BlogList from "../../components/Blog/List/List";

import { Data_Blog } from "../../data/index"

export default function Blog() {
    console.log('test')
  return (
    <>
      <Head>
        <title>Blog | Bani Design</title>
      </Head>
      <PageHeader title="Blog" image="blog" />
      <BlogList list={Data_Blog} />
    </>
  )
}