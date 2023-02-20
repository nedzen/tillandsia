import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

export const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <main className="pg404">
        <h1 className="postTitle">404</h1>
        <p>Page not found</p>
        <Image
          blurDataURL={blurIMG}
          placeholder="blur"
          alt={`cover`}
          src={`https://s3.eu-west-1.amazonaws.com/mariusnedelcu.com/Evelyn_De_Morgan_-_Angel_of_Death.jpg`}
          width={1200}
          height={1608}
          layout="responsive"
          priority
        />
      </main>
    </Layout>
  );
};

export default NotFound;
