import React from 'react';
import Layout from '../components/Layout';

export const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <main className="pg404">
        <h1 className="postTitle">404</h1>
        <p>Page not found</p>
      </main>
    </Layout>
  );
};

export default NotFound;
