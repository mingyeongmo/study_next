import Image from 'next/image'

export default function A() {
    return (
        <>
            <h1>image페이지</h1>
            <Image
                src="/images/profile.jpeg"
                height={144}
                width={144}
                alt="Your Name"
            />
        </>
    )
}