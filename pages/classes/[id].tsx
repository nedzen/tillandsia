// import { format, parseISO } from 'date-fns';
// import fs from 'fs';
// import matter from 'gray-matter';
// import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import path from 'path';
import React from 'react';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
// import { PostType } from '../../types/post';
// import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

// import gymClasses from "../../data/gymClasses.json";
import ProjectData from '../../data/data.json';
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
type ClassProps = {
  classInfo: {
    ID: string;
  };
};

const ProjectPage = ({ classInfo }: ClassProps): JSX.Element => {
  const customMeta: MetaProps = {
    // title: `${classInfo.name}`,
    title: `name`,
    description: 'description',
    image: `${WEBSITE_HOST_URL}/image.png`,
    date: 'date',
    type: 'article',
  };

  return (
    <>
      <Layout customMeta={customMeta}>
        <section className="min-h-screen mx-5 lg:mx-64 mt-24">
          <div className="flex flex-col md:flex-row text-center justify-center items-center">
            <div className="relative min-h-50vh w-full md:w-1/3 "></div>
            <div className="md:w-1/2 md:text-left">
              <p className="text-3xl mb-4">{classInfo.ID}</p>
              {/* <p className="text-xl">{classInfo.name}</p> */}
              {/* <p className="text-xl">{classInfo.description}</p> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  // export const getStaticProps = async (context: any) => {
  const classInfo = ProjectData.find(
    (classes) => classes.ID == context.params.id
  );
  return {
    props: {
      classInfo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = ProjectData.map((el) => el.ID);

  const paths = ids.map((el) => ({
    params: { id: el.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
