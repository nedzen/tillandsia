import React from 'react';
import Image from 'next/dist/client/image';
const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NextJsImage = (image, offset, rect) => {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        alt=""
        blurDataURL={blurIMG}
        src={image}
        layout="fill"
        loading="eager"
        placeholder="blur"
        objectFit="contain"
        draggable={false}
        sizes={
          typeof window !== 'undefined'
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
};

export default NextJsImage;
