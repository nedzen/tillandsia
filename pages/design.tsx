import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
const blurIMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
// const PortofolioPic = (props: any) :any => {
//   // const {image, desc} = props
//   // const image = props.image
//   // const desc = props.desc

//   return <li>{props}</li>
// };
//

const FigmaEmbed = ({ ...props }) => (
  <iframe className="figmaEmbed" src={props.embed} allowFullScreen></iframe>
);
const CoverImg = ({ ...props }) => {
  return (
    <div className="pt2 pb2">
      <Image
        blurDataURL={blurIMG}
        placeholder="blur"
        alt={`cover`}
        src={props.src}
        width={1000}
        height={200}
        layout="responsive"
        priority
      />
    </div>
  );
};

export const About = (): JSX.Element => {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  return (
    <Layout
      customMeta={{
        title: 'Marius',
      }}
    >
      <header className="postHeader">
        <div className="intro">
          <p>
            I am a multidisciplinary designer who excels at the intersection of
            digital product design and brand identity. I have had the privilege
            to make products used and loved by millions through working with
            companies like Facebook, Hewlett Packard Enterprise, Gorgias and
            many startups. My purpose is to simplify things for people and help
            them save time. I love yoga and cucumbers.
          </p>
        </div>
      </header>

      <main className="DSGN">
        <div className="project">
          <CoverImg src={data.gorgiasApp.images[0].url} />
          {/* <div className="projectHeader">
            <h2>Gorgias - Helpcenter</h2>
          </div> */}

          <div className="block">
            <div className="c-left">
              <strong>Project</strong>
              <ul className="projectMeta">
                <li>Date: {data.gorgiasApp.date}</li>
                <li>Client: Gorgias</li>
                <li className="tags">
                  <span>Expertise: </span>
                  <b>UX</b>
                  <b>UI</b>
                  <b>Design Systems</b>
                  <b>Prototype</b>
                  <b>Testing</b>
                </li>
              </ul>
            </div>
            <div className="c-right">
              <h2>Gorgias - Helpcenter</h2>
              <p>
                This product allows shop owners to create a self-service portal
                for their customers. Most common support requests are related to
                managing orders or requesting info about products. We wanted to
                create a product that would let customers handle these
                operations themselves. This would reduce support requests by
                20-30%. The self-service portal is an add-on for the Gorgias
                helpdesk and it can be enabled as an embedded module within the
                shop templates or be triggered inside the chat widget on
                specific customer requests.
              </p>
            </div>
          </div>

          <FigmaEmbed embed={data.gorgiasApp.embed} />

          <div className="block">
            <div className="c-left">
              <strong>Role</strong>
              <ul className="projectMeta">
                <li>Product Designer</li>
              </ul>
            </div>
            <div className="c-right">
              <p>
                I have worked on this project, with a product manager and we
                have challenged each other on the UX side of things.
              </p>
              <ul className="list">
                <li>
                  Design the interface for the product on both platforms;
                  (embedded and chat-widget)
                </li>
                <li>Create a unified modular design system.</li>
                <li>
                  Design the configuration part of the product within the
                  Gorgias helpdesk.
                </li>
                <li>
                  Design paywalls within the helpdesk to enable access to this
                  new feature(product).
                </li>
                <li>
                  Produce prototypes for early testing with a group of customers
                  and get feedback from the product team.
                </li>
                <li>
                  Refine the design, implement feedback, and further challenge
                  UX.
                </li>
              </ul>
              <p>
                It was super exciting to create a new product within the already
                existing ecosystem of the Gorgias helpdesk. I learned that its
                super important to identify customer needs and come up quickly
                with solutions. I also learned how to design a product that
                allows extended customization. The embedded self-service portal
                had to be aligned aesthetically with the customers eCommerce
                website.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
