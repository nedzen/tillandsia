/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

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