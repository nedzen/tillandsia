// import { format, parseISO } from 'date-fns';
// import { GetStaticProps } from 'next';

import React from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
// import { PostType } from '../types/post';
// import Image from 'next/image';
import NFTs from '../data/NFT.json';
import NFT from '../components/NFT';

export const NFTpage = (): JSX.Element => {
  return (
    <Layout>
      <main className="NFT">
        <ul className="articleList">
          {NFTs.map((nft, index: number) => {
            return (
              <li key={index}>
                <NFT data={nft} />
              </li>
            );
          }).reverse()}
        </ul>
      </main>
    </Layout>
  );
};

export default NFTpage;
