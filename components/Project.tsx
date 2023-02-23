// import Link from 'next/link';
import React from 'react';
// import { useRouter } from 'next/router';
// import Subscribe from './Subscribe';
import Image from 'next/dist/client/image';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

const FigmaEmbed = ({ ...props }) => (
  <iframe className="figmaEmbed" src={props.embed} allowFullScreen></iframe>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Project = ({ ...props }) => {
  const {
    ID,
    client,
    embed,
    tags,
    title,
    intro,
    details,
    role,
    images,
    tasks,
    coverImg,
  } = props.data;

  return (
    <div className="project" id={ID}>
      {coverImg == '' ? (
        ''
      ) : (
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
      )}

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

      <FigmaEmbed embed={embed} />

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
            {images.map((item: any, i: number) => (
              <li key={i}>
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

export default Project;
