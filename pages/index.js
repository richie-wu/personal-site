import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>

        </div>
        <div className={utilStyles.customTitle}>
          richie wu
        </div>
        <div className={utilStyles.introSection}>
          <p>hi my name is richie. welcome to my space.
            i love to write about all sorts of things because my mind is racing all the time.
          </p>
          <p>
            i build fintech products for founders at brex.
            i run at post content on litpm to help people break into product management.
          </p>
          <p>
            currently based in nyc.
          </p>
        </div>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href='/posts'>
          <div className={utilStyles.mainWriting}>
            my writing
          </div>
        </Link>
      </section>

      <div className={utilStyles.footerSection}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.socialItem}>
            <Link href=''>twitter</Link>
          </li>
          <li className={utilStyles.socialItem}>
            <Link href=''>linkedin</Link>
          </li>
          <li className={utilStyles.socialItem}>
            <Link href=''>email</Link>
          </li>
        </ul>

      </div>
    </Layout>
  );
}
