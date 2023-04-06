import Layout from '../../components/layout/Layout';
import {getAllPostIds, getPostData} from '../../utils/Posts';
import Head from 'next/head';
import Date from '../../components/date/Date';
import utilStyles from '../../styles/utils.module.scss';

export const getStaticProps = async ({ params }) => {
    const postData = getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export const getStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            </article>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </Layout>
    );
}

export default Post;
