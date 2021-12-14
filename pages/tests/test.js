import Image from 'next/image'
import Head from 'next/head'
export default function A() {
    return (
        <>
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
        </>
    )
}