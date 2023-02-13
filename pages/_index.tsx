import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

const Caption = (props): JSX.Element => {
  return <div className="caption" {...props} />;
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <main>
        <ul className="articleList">
          {posts
            .map((post) => (
              <li key={post.slug}>
                <article>
                  <div className="postMeta">
                    {format(parseISO(post.date), 'MMMM dd, yyyy')}
                    &nbsp;
                    {post.tag ? (
                      <span className="postTag">{post.tag}</span>
                    ) : (
                      ''
                    )}
                  </div>
                  <h3 className="post-title h4">
                    <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  {post.image ? (
                    <>
                      <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                        <a className="imageLink">
                          <Image
                            blurDataURL="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            placeholder="blur"
                            alt={`Bridge`}
                            src={post.image}
                            width={post.imageW}
                            height={post.imageH}
                            priority
                          />
                        </a>
                      </Link>
                      <Caption>{post.image}</Caption>
                    </>
                  ) : (
                    ''
                  )}
                  <p>{post.description}</p>
                </article>
              </li>
            ))
            .reverse()}
        </ul>
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
    'imageW',
    'imageH',
    'imageCaption',
  ]);
  return {
    props: { posts },
  };
};

export default Index;
