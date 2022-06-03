import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// type IndexProps = {
//   data: any;
//   title: string;
//   url: string;
//   file: string;
//   size: string[];
// };

const NFT = (props): any => {
  const { title, url, file, size } = props.data;
  const { w, h } = size;

  return (
    <>
      <Image
        blurDataURL={file}
        placeholder="blur"
        alt={title}
        src={file}
        width={w}
        height={h}
        priority
        layout="responsive"
      />
      <p>
        <Link href={url}>
          <a>Get NFT on rarible</a>
        </Link>
      </p>
    </>
  );
};

export default NFT;
