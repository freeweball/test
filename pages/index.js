import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/Layout';
import utilStyles from '../styles/utils.module.scss';
import {getSortedPostsData} from '../utils/Posts';
import Date from '../components/date/Date';
import {Link} from '@mui/material';

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

const Home = ({ allPostsData }) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Test Progect</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link
                                href={`/posts/${id}`}
                                underline="always"
                            >{title}</Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

export default Home;
