import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Marius',
      }}
    >
      <main>
        <h1>About Page</h1>
        <p>Welcome to the about page</p>
      </main>
    </Layout>
  );
};

export default About;
