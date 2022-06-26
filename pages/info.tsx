import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Marius',
      }}
    >
      <header className="postHeader">
        <h1 className="postTitle">etc</h1>
      </header>
      <main>
        <p>/more/</p>
      </main>
    </Layout>
  );
};

export default About;
