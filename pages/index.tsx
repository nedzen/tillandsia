import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <ul className='articleList'>
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <div className='postMeta'>
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
                &nbsp;
                { post.tag ? <span className='postTag'>{post.tag}</span> : "" }
              </div>
              <h3 className='post-title'>
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>{post.title}</Link>
              </h3>
              {/* { post.image ? '' : '' } */}
              <p>{post.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'tag', 'image']);
  return {
    props: { posts },
  };
};

export default Index;