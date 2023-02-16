import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
import ProjectData from '../data/data.json';

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
      {coverImg == '' ? (
        ''
      ) : (
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
      )}

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
            <li>Download PNG previews</li>
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
              Hi, I`m Marius, and my main professional focus is digital product
              design. I work at the intersection of digital product design and
              brand identity. In the past few years, I`ve been able to design
              products used and loved by millions through working with companies
              like Gorgias, Hookdeck, HPE, and many startups. With every design
              challenge I undertake, I strive to simplify things for the end
              user and maximize profit for my clients.
            </p>
          </>
          <div className="pb05">
            <strong>PROJECTS:</strong>
          </div>
          <ul className="list">
            <li>
              <a href="#02_hookdeck_app">
                Hookdeck: Improving the UX for a technical product
              </a>
            </li>
            <li>
              <a href="#01_gorgias_app">
                Designing a Helpdesk with over 10,000 customers
              </a>
            </li>
            <li>
              <a href="#05_gorgias_helpcenter">
                Designing a self-service portal for Ecommerce platforms
              </a>
            </li>
            <li>
              <a href="#03_braintrust_helpcenter">
                Designing a Helpcenter & Knowledge Base for the Braintrust
                community
              </a>
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
