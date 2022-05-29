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