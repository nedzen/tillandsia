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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NFT = (props): any => {
  const { title, url, file, size, price } = props.data;
  const { w, h } = size;

  return (
    <>
      <h3>{title}</h3>
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
        <strong>
          <Link href={url}>
            <a>Buy {price}</a>
          </Link>
          &nbsp; &gt;
        </strong>
      </p>
    </>
  );
};

export default NFT;
