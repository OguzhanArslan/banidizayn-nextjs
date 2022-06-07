import Head from 'next/head'
import PageHeader from "../components/Layout/PageHeader/PageHeader"
import ProductDetail from "../components/Product/Detail/Detail";
import HomeGallery from "../components/Banner/Gallery/Gallery"


import { Data_Gallery } from "../data/index"

export default function Blog() {
  return (
    <>
      <Head>
        <title>Product | Bani Design</title>
      </Head>
      <PageHeader title="Product" image="blog" />
      <ProductDetail image="detail01"/>
      <HomeGallery items={Data_Gallery} />

    </>
  )
}