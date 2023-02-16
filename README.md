# NextJS - Typescript - MDX - Blog

A Next.js starter for your next blog or personal site. Built with:

- [Typescript](https://www.typescriptlang.org/)
- Write posts with [MDX](https://mdxjs.com/)
- Style with [Tailwind CSS](https://tailwindcss.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

This Starter is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io) and [Anson Lichtfuss](https://github.com/ansonlichtfuss/website).

👀 [View the Live Demo](https://nextjs-typescript-mdx-blog.vercel.app/)

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-typescript-mdx-blog.git
cd nextjs-typescript-mdx-blog

yarn install
# or
npm install

yarn dev
# or
npm run dev
```

Your new site will be up at http://localhost:3000/

# working with IPFS

Removing pins pass in flag `cid` or `name` (filename)
`ipfs pin remote rm --service=pinata -cid=QmYTCUoyLvkgLiWcVuwr8sQK5RGb9jdSSFpSMvGghEcYC8`

Using pinata CLI
`pinata-cli --help`

IPFS docs : <https://docs.ipfs.io/how-to/address-ipfs-on-web/>

https://docs.pinata.cloud/api-pinning/pinning-services-api#configuring-pinata-in-the-ipfs-cli

This seems to work only with ERC-20

<!-- import { NFTE } from '@nfte/react';
<NFTE contract="0x2953399124f0cbb46d2cbacd8a89cf0599974963" tokenId="90273974914282870690346437205062680115842312674309263334320963167329921794049"/> -->
<!-- https://www.youtube.com/watch?v=AaCgydeMu64 -->

### adding images

```
<Image
  blurDataURL={
    'https://ipfs.io/ipfs/QmZ8xq37g7r5DrXgxpfifTZcJnfHdQkbQy4WxBsR5Xn7h9'
  }
  placeholder="blur"
  alt={`Bridge`}
  src={`https://ipfs.io/ipfs/QmZ8xq37g7r5DrXgxpfifTZcJnfHdQkbQy4WxBsR5Xn7h9`}
  width={1440}
  height={960}
  priority
/>
```

tracking umami--click--signup-button
