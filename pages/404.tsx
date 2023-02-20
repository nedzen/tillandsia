import React from 'react';
import Layout from '../components/Layout';
import NextJsImage from '../components/NextJsImage';
import Image from 'next/dist/client/image';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import slides from 'data/portfolioSlides.json';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

export const NotFound = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <Layout>
      <main className="pg404">
        <h1 className="postTitle">404</h1>
        <p>Page not found</p>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setOpen(true)}
        >
          Open Lightbox
        </button>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides.gig}
          render={{ slide: NextJsImage }}
          plugins={[Zoom]}
        />
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
