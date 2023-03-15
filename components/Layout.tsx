import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
// import Footer from './Footer';
import Subscribe from './Subscribe';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head customMeta={customMeta} />
      <Navigation />
      {children}
      {router.pathname == '/' ? <Subscribe /> : ''}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
