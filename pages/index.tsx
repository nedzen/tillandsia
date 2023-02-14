import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
import ProjectData from '../data/data2.json';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

const FigmaEmbed = ({ ...props }) => (
  <iframe className="figmaEmbed" src={props.embed} allowFullScreen></iframe>
);

const Project = ({ ...props }) => {
  const {
    ID,
    date,
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
    <div className="project">
      <div className="coverImg" id={ID}>
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
            <li>Date: {date}</li>
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
            <li>Download JPG previews</li>
          </ul>
        </div>

        <div className="c-right">
          <ul className="list">
            {images.map((item: any, i: number) => (
              <li key={i}>
                <a href={item.url} rel="noreferrer" target="_blank">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Marius',
      }}
    >
      <header className="postHeader">
        <div className="intro">
          <>
            <Image
              blurDataURL={blurIMG}
              placeholder="blur"
              alt={`cover`}
              src={`/images/avatar.png`}
              width={50}
              height={50}
              priority
            />
            <p>
              I am a multidisciplinary designer who excels at the intersection
              of digital product design and brand identity. I have had the
              privilege to make products used and loved by millions through
              working with companies like Facebook, Hewlett Packard Enterprise,
              Gorgias and many startups. My purpose is to simplify things for
              people and help them save time.
            </p>
          </>
          <div className="pb05">
            <strong>PROJECTS:</strong>
          </div>
          <ul className="list">
            <li>
              <a href="#01_gorgias_app">Helpdesk platforms</a>
            </li>
            <li>
              <a href="#">Helpcenter</a>
            </li>
            <li>
              <a href="#">Gorgias Branding and Website redesign</a>
            </li>
            <li>
              <a href="#">Hookdeck</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="DSGN">
        {ProjectData.map((item: any, i: number) => (
          <Project key={i} data={item} />
        ))}
      </main>
    </Layout>
  );
};

export default About;
