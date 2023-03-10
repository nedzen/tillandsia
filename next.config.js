/** @type {import('next').NextConfig} */

const path = require('path');
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'bafybeie67v76ryk4t7vx55kw5az43dnc2medgmvir33orv7atam625cnrm.ipfs.infura-ipfs.io',
      'bafybeig3qdnhqrxujlqg4tqn4p4f2dri3vtyp4kdggvloubnuspi44wuiu.ipfs.infura-ipfs.io',
      'bafybeie7o3i4yztcnwcvn7vm2tl3nbcyngubl6ozetlplfueog7kwhipji.ipfs.infura-ipfs.io',
      'bafybeig6b5obr6xjuzojv2ooalexb635pmcyetsmnqvbeehzz7gmw55mqa.ipfs.infura-ipfs.io',
      'bafybeidmmelnnt4zzvuuzezoprabgo4of2fiyn6lr5z6kwxz5nibeilazy.ipfs.infura-ipfs.io',
      'bafybeigntr5m5wliquv6ljcxoj3tmvhhkmfdnqewpym7zuvbxyn43bxvhy.ipfs.infura-ipfs.io',
      'bafybeifc3zi7n66ytepzevkhsx54hf5llidcgykrchrpbikhdtn53i4ofi.ipfs.infura-ipfs.io',
      'bafybeid2stie2nb2voh4f3mphpchwhipf5pmw3zf3ived4kz3ko6hp6buu.ipfs.infura-ipfs.io',
      'bafybeigmfpwlvzpwsmuoeqizsgiof6xheefjugt3lmw2hzb377lrmofik4.ipfs.infura-ipfs.io',
      'bafybeihtua55jzg7mytobbqydfqic2cjbppdthdrz2mu3olrgevx6cwcgq.ipfs.infura-ipfs.io',
      'bafybeiexxda6di7w66rcpi22rcjaqycrnh5qr2jbyq6zonxkmhvqr5fnim.ipfs.infura-ipfs.io',
      'bafybeigvj47y3tlplaxqzyvz26jsejsy2pxk3f2o2p77lh75lw2mo6eyky.ipfs.infura-ipfs.io',
      'drive.google.com',
      'ipfs.io',
      'placekitten.com',
      'mariusnedelcu.com',
      'link.storjshare.io',
      'bgphmyryzzmge66vnkmd3ejzoi2ykmkkj5q35qa4gpkkpj7qg4.arweave.net',
      's3.eu-west-1.amazonaws.com',
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
});

// module.exports = withMDX(withPlaiceholder({
//   reactStrictMode: true,

//   images: {
//     domains: ['images.prismic.io', 'mariusnedelcu.com', 'static.wixstatic.com', 'bit.ly', 'dl.airtable.com']
//   },

//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },

//   // Append the default value with md extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

//   webpack: (config, { isServer }) => {
//     // Fixes npm packages (mdx) that depend on `fs` module
//     if (!isServer) {
//       config.resolve.fallback.fs = false
//     }
//     return config
//   },

// }))
