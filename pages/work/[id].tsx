import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import ProjectData from '../../data/data.json';
import Image from 'next/image';
import Lightbox from '../../components/CoolLightbox';
import ImageMosaic from '../../components/ImageMosaic';

import 'photoswipe/dist/photoswipe.css';

export const mosaicImages = [
  {
    src: 'https://i.imgur.com/8oNzu0S.png',
    alt: 'README.md',
    caption: 'README.md',
    width: 2486,
    height: 1469,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
    alt: 'Windows 10 Dark Mode Setting',
    caption: 'Windows 10 Dark Mode Setting',
    width: 2848,
    height: 2035,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
    alt: 'macOS Mojave Dark Mode Setting',
    caption: 'macOS Mojave Dark Mode Setting',
    width: 1200,
    height: 1218,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
    alt: 'Android 9.0 Dark Mode Setting',
    caption: 'Android 9.0 Dark Mode Setting',
    width: 1280,
    height: 600,
    loading: 'lazy',
  },
  {
    src: 'https://i.imgur.com/8oNzu0S.png',
    alt: 'README.md',
    caption: 'README.md',
    width: 2486,
    height: 1469,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
    alt: 'Windows 10 Dark Mode Setting',
    caption: 'Windows 10 Dark Mode Setting',
    width: 2848,
    height: 2035,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
    alt: 'macOS Mojave Dark Mode Setting',
    caption: 'macOS Mojave Dark Mode Setting',
    width: 1200,
    height: 1218,
    loading: 'lazy',
  },
  {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
    alt: 'Android 9.0 Dark Mode Setting',
    caption: 'Android 9.0 Dark Mode Setting',
    width: 1280,
    height: 600,
    loading: 'lazy',
  },
];

export const lightboxImages = mosaicImages.map(({ src, alt, caption }) => ({
  src,
  alt,
  caption,
}));

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

// const FigmaEmbed = ({ ...props }) => (
//   <iframe className="figmaEmbed" src={props.embed} allowFullScreen></iframe>
// );

type ProjectProps = {
  projectInfo: {
    ID: string;
    title: string;
    coverImg: {
      src: string;
      width: number;
      height: number;
    };
    date: string;
    client: string;
    embed: string;
    tags: any;
    intro: string;
    details: string;
    tasks: Array<string>;
    role: string;
    images: Array<string>;
  };
};

const Project = ({ ...props }) => {
  const {
    ID,
    client,
    // embed,
    tags,
    title,
    intro,
    details,
    role,
    images,
    tasks,
    coverImg,
  } = props.data;

  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <div className="project" id={ID}>
      <div className="coverImg">
        <Image
          blurDataURL={blurIMG}
          placeholder="blur"
          alt={`cover`}
          src={coverImg}
          width={1000}
          height={500}
          layout="responsive"
          priority
        />
      </div>

      <div className="block">
        <div className="c-left">
          <strong>Project</strong>
          <ul className="projectMeta">
            {/* <li>Date: {date}</li> */}
            <li>Client: {client}</li>
            <li className="tags">
              <span>Expertise: </span>
              {tags.map((item: any, i: number) => (
                <b key={i}>{item} </b>
              ))}
            </li>
          </ul>
        </div>
        <div className="c-right">
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
      </div>

      {/* <FigmaEmbed embed={embed} /> */}

      <div className="block">
        <div className="c-left">
          <strong>Role</strong>
          <ul className="projectMeta">
            <li>{role}</li>
          </ul>
        </div>
        <div className="c-right">
          <div dangerouslySetInnerHTML={{ __html: details }} />
          <ul className="list">
            {tasks.map((item: any, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block">
        <div className="c-left">
          <strong>Files</strong>
          <ul className="projectMeta">
            <li>Download PNG previews</li>
          </ul>
        </div>

        <div className="c-right">
          <ul className="list">
            <div>
              <h1>test</h1>

              <ImageMosaic
                images={mosaicImages}
                handleClick={(e, { index }) => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              />
              <Lightbox
                currentImageIndex={currentImageIndex}
                setCurrentIndex={setCurrentIndex}
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                images={lightboxImages}
                /* Add your own UI */
                // renderHeader={() => (<CustomHeader />)}
                // renderFooter={() => (<CustomFooter />)}
                // renderPrevButton={() => (<CustomLeftArrowButton />)}
                // renderNextButton={() => (<CustomRightArrowButton />)}
                // renderImageOverlay={() => (<ImageOverlayComponent >)}
                /* Add styling */
                // className="cool-class"
                // style={{ background: "grey" }}
                /* Handle closing */
                // onClose={handleClose}
                /* Use single or double click to zoom */
                // singleClickToZoom
                /* react-spring config for open/close animation */
                // pageTransitionConfig={{
                //   from: { transform: "scale(0.75)", opacity: 0 },
                //   enter: { transform: "scale(1)", opacity: 1 },
                //   leave: { transform: "scale(0.75)", opacity: 0 },
                //   config: { mass: 1, tension: 320, friction: 32 }
                // }}
              />
            </div>
            {images.map((item: any, i: number) => (
              <li key={i} className="lightbox">
                <a
                  href={item.src}
                  rel="noreferrer"
                  target="_blank"
                  className={
                    'umami--click--' +
                    ID +
                    '__' +
                    item.alt.replace(/[\s:]/g, '') +
                    '__' +
                    i
                  }
                >
                  {item.alt}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectPage = ({ projectInfo }: ProjectProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${projectInfo.title}`,
    description: 'description',
    image: `${WEBSITE_HOST_URL}/image.png`,
    date: 'date',
    type: 'article',
  };

  return (
    <>
      <Layout customMeta={customMeta}>
        <main>
          <Project data={projectInfo} />
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  // export const getStaticProps = async (context: any) => {
  const projectInfo = ProjectData.find(
    (classes) => classes.ID == context.params.id
  );
  return {
    props: {
      projectInfo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = ProjectData.map((el) => el.ID);

  const paths = ids.map((el) => ({
    params: { id: el.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
