import Head from "next/head"

export default function Title({title}) {
    return <Head>
        <title>{title} | 원클린 Oneclean</title>
    </Head>
}