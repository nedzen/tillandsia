import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
// import Project from '../components/Project';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

// const handleOnBuy = () => {
//   posthog.capture('purchase', { price: 5900, currency: 'USD' });
// };

const introcontent = `<p>Hello, I'm Marius, a digital product designer with a passion for creating User Interfaces that look great and deliver results. By combining my expertise in User Experience and brand identity, I've been able to create products that have been used and adored by millions. My client portfolio includes industry giants such as HPE, Gorgias, Hookdeck, as well as startups.</p><p>On each project, I strive to deliver simple, intuitive designs that help businesses succeed. I love to take on UX challenges, test hypotheses and achieve measurable results for my clients.</p>`;

const Post = ({ ...props }) => {
  const { ID, coverImg, title } = props.data;
  return (
    <div className="post" id={ID}>
      <Link href={'work/' + ID} scroll={true} passHref>
        <a>
          <Image
            blurDataURL={blurIMG}
            placeholder="blur"
            alt={`cover`}
            src={coverImg.src}
            width={coverImg.width}
            height={coverImg.height}
            priority
          />
          <span className="h4">{title}</span>
        </a>
      </Link>
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
        </div>
      </header>

      <main className="DSGN">
        <div className="rowpost">
          {ProjectData.map((item: any, i: number) => {
            return <Post key={i} data={item} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export default About;
