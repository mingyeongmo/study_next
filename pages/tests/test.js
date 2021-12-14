import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
export default function A() {
    return (
        <>
        <Layout>
            <Head>
                <title>Image페이지</title>
            </Head>
                <h1>Image페이지</h1>
                <Image
                    src="/images/profile.jpeg"
                    height={144}
                    width={144}
                    alt="Your Name"
                />
        </Layout>
            
        </>
    )
}