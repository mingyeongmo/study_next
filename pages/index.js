import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>제 이름은 민경모입니다. UI/UX를 중시하며 개발하는<br/>프론트엔드개발자가 될것입니다.</p>
        <p>
          <a href="https://github.com/mingyeongmo">My Github</a>
        </p>
      </section>
    </Layout>
  )
}
