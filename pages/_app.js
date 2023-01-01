import Layout from "../components/common/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from 'recoil';

export default function App({Component, pageProps}) {
    return (
      <>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        </Head>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </>
    )
}