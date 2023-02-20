import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
import ProjectData from '../data/data.json';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

const FigmaEmbed = ({ ...props }) => (
  <iframe className="figmaEmbed" src={props.embed} allowFullScreen></iframe>
);

const introcontent = `<p>Hello, I'm Marius, a digital product designer with a passion for creating User Interfaces that look great and deliver results. By combining my expertise in User Experience and brand identity, I've been able to create products that have been used and adored by millions. My client portfolio includes industry giants such as HPE, Gorgias, Hookdeck, as well as startups.</p><p>On each project, I strive to deliver simple, intuitive designs that help businesses succeed. I love to take on UX challenges, test hypotheses and achieve measurable results for my clients.</p>`;

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

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Marius Nedelcu - digital product design - UX/UI',
      }}
    >
      <header className="postHeader">
        <div className="intro">
          <>
            <ul className="secNav">
              <li>
                <Image
                  blurDataURL={blurIMG}
                  placeholder="blur"
                  alt={`cover`}
                  src={`/images/avatar.png`}
                  width={50}
                  height={50}
                  priority
                />
              </li>
              <li>
                <mark>Contact: hello@mariusnedelcu.com</mark>
              </li>
            </ul>
            <div dangerouslySetInnerHTML={{ __html: introcontent }} />
          </>
          <div className="pb05">
            <strong>PROJECTS:</strong>
          </div>
          <ul className="list">
            <li>
              <a
                href="#02_hookdeck_app"
                className="umami--click--02_hookdeck_app"
              >
                Hookdeck: Improving the UX for a technical product
              </a>
            </li>
            <li>
              <a href="#01_gorgias_app" className="umami--click--1_gorgias_app">
                Gorgias: Designing a Helpdesk with over 10,000 customers
              </a>
            </li>
            <li>
              <a
                href="#05_gorgias_helpcenter"
                className="umami--click--05_gorgias_helpcenter"
              >
                Gorgias: Designing a self-service portal for Ecommerce platforms
              </a>
            </li>
            <li>
              <a
                href="#05_gorgias_www"
                className="umami--click--05_gorgias_www"
              >
                Gorgias: Branding and website
              </a>
            </li>
            <li>
              <a
                href="#03_braintrust_helpcenter"
                className="umami--click--03_braintrust_helpcenter"
              >
                Designing a Helpcenter & Knowledge Base for the Braintrust
                community
              </a>
            </li>
            <li>
              <a href="#06_dive_www" className="umami--click--06_dive_www">
                Dive Analytics: Design on all fronts - product and website
              </a>
            </li>
            <li>
              <a
                href="#07_scytale_www"
                className="umami--click--07_scytale_www"
              >
                Scytale: Website design and development
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
