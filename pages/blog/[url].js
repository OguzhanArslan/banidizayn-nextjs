import Head from 'next/head'
import PageHeader from "../../components/Layout/PageHeader/PageHeader"
import Detail from "../../components/Blog/Detail/Detail";

import { Data_Blog } from "../../data/index"

export default function BlogDetail(props) {
    const item = Data_Blog.items.find((x) => x.link === props.params.url)
    return (
        <>
            <Head>
            <title>Blog | Bani Design</title>
            </Head>
            <PageHeader title="Blog" image="blog" />
            <Detail item={item} />
        </>
    )
}

export async function getServerSideProps({params}) {
	return {
		props: {
			params,
		},
	}
}