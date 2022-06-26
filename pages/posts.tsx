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
      <main className="pt3">
        {posts.map((post) => (
          <article key={post.slug}>
            <p> {format(parseISO(post.date), 'MMMM dd, yyyy')}</p>
            <h3 className="post-title">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <p>{post.description}</p>
            <mark>
              <p> | {post.tag} | </p>
            </mark>
            <mark>
              <p> | {post.image} | </p>
            </mark>
            {/* <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            <a>Read More</a>
          </Link> */}
          </article>
        ))}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'tag',
    'image',
  ]);
  return {
    props: { posts },
  };
};

export default Index;
