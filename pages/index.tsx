import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
import Pdata from '../data/data.json';

//useSWR allows the use of SWR inside function components
// import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// const fetcher = (url) => fetch(url).then((res) => res.json());

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
// const CoverImg = ({ ...props }) => {
//   return (
//     <div className="pt2 pb2">
//       <Image
//         blurDataURL={blurIMG}
//         placeholder="blur"
//         alt={`cover`}
//         src={props.src}
//         width={1000}
//         height={500}
//         layout="responsive"
//         priority
//       />
//     </div>
//   );
// };

export const About = (): JSX.Element => {
  // const { data, error } = useSWR('/api/staticdata', fetcher);
  //Handle the error state
  // if (error) return <div>Failed to load</div>;
  //Handle the loading state
  // if (!data) return <div>Loading...</div>;
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
          <div className="pb05">
            <strong>PROJECTS:</strong>
          </div>
          <ul className="list">
            <li>
              <a href="#">Helpdesk platforms</a>
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
        <div className="project">
          <div className="coverImg">
            <Image
              blurDataURL={blurIMG}
              placeholder="blur"
              alt={`cover`}
              src="/images/gorgias.svg"
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
                <li>Date: {Pdata.gorgiasApp.date}</li>
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
              <h2>Helpdesk</h2>
              <p>
                Gorgias is a San-Francisco-based company focused on providing
                the best helpdesk product out there. It introduces some unique
                features to help agents treat support requests more effectively;
                configure automatic responses, flawlessly integrations with
                social media channels, and most popular platforms in the
                e-commerce ecosystem.
              </p>
            </div>
          </div>

          <div className="block">
            <div className="c-left">
              <strong>Role</strong>
              <ul className="projectMeta">
                <li>Product Designer</li>
              </ul>
            </div>
            <div className="c-right">
              <p>
                For the past 3 years, I have worked regularly with Gorias on
                multiple fronts. We started with rebranding and moved on to
                redesigning the product. In the design process, I gathered app
                usage data, made hypotheses, produced prototypes, looked at
                client feedback, and validated my design choices with the
                cofounders, respectively the CTO and CEO. I made a thoroughly
                documented design system to enable collaboration and scale
                within the product team. During the implementation phase, I was
                actively involved in the GitHub workflow to respond to devs
                requests. I have designed the native app and the chat widget
                used on the customer`s e-commerce websites. I have gradually
                implemented workflows and processes to speed up production and
                make a more customer-centric product.
              </p>
              <p>
                The redesign solved all the usability issues. Clients loved it
                from day one. 90% of the feedback was positive. In the following
                months, the company had spectacular growth. It went from 5 to 15
                employees, Launched on Shopify, Raised a series A of 14M,
                extended in Europe, Launched on Magento, raised 25M series B,
                expanded to 70+ employees, and served more than 4000 customers.
              </p>
              <p>
                I have greatly evolved professionally working within the Gorgias
                product team. I learned to work in short feedback loops and
                involve the people who knew best the specific issues I was
                trying to solve. I got better at taking and giving feedback. I
                learned how to create design systems that scale. I have gained
                extended experience in the E-commerce ecosystem, customers,
                Shopify, and a plethora of other services that we used for
                integrations.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="block">
            <div className="c-left">
              <strong>Project</strong>
              <ul className="projectMeta">
                <li>Date: {Pdata.gorgiasApp.date}</li>
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

          <FigmaEmbed embed={Pdata.gorgiasHelpcenter.embed} />

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
                  (embedded and chat-widget){' '}
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
                  and get feedback from the product team.{' '}
                </li>
                <li>
                  Refine the design, implement feedback, and further challenge
                  UX.{' '}
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

        <div className="project">
          <div className="block">
            <div className="c-left">
              <strong>Project</strong>
              <ul className="projectMeta">
                <li>Date: {Pdata.gorgiasApp.date}</li>
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
              <h2>Gorgias - Website redesign</h2>
              <p>
                The design of the old website was dated. The colors were too
                common, the typography was pretty bad and the illustrations
                showing the product were dated or bluntly made by non-designer
                people. We needed a full rehaul of the entire website and a new
                style guide.
              </p>
            </div>
          </div>

          <FigmaEmbed embed={Pdata.gorgiasWww.embed} />

          <div className="block">
            <div className="c-left">
              <strong>Role</strong>
              <ul className="projectMeta">
                <li>Product Designer</li>
              </ul>
            </div>
            <div className="c-right">
              <p>
                I was eager to take on this project, my responsibility was to:
              </p>
              <ul className="list">
                <li>
                  Produce a new visual appeal for the brand that would
                  incorporate the company`s values and ambitions.{' '}
                </li>
                <li>
                  Come up with a strategy for effectively presenting key
                  features of the product.
                </li>
                <li>
                  Collaborate with the head of marketing in Paris to define the
                  strategy, the voice, and tone of the language; and also to
                  write the initial copy.
                </li>
                <li>
                  Create a new brand style guide including colors,
                  illustrations, icons, typography, etc.
                </li>
                <li>
                  Make a brand book where the new guidelines are referenced.
                </li>
                <li>
                  Design the new website entirely and create a design system to
                  easily produce new pages.
                </li>
                <li>
                  Supervise the production of collateral design assets (mainly
                  promotional materials) by other freelancers.
                </li>
              </ul>
              <p>
                The results were impressive. Customer acquisition grew by 200%.
                We received mixed feedback but mostly good. We AB-tested and
                tweaked some copywriting and illustrations, people understood
                much better the product`s functionality and pricing. Bounce-rate
                dropped. We released the new website around the beginning of the
                pandemic so there was that too, the entire eCommerce sector was
                booming. The conversion of the ads was great, the bold colors
                and style worked fabulously!
              </p>
              <p>
                I learned quite a bit about the growth marketing tactics applied
                at a fast-growing company. I also learned how to conduct
                effective AB-testing and how to write good copy. It was cool to
                collaborate with the marketing team, assist along with the
                production of new promotional assets, test new taglines, and
                see, first-hand what converts best.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="coverImg">
            <Image
              blurDataURL={blurIMG}
              placeholder="blur"
              alt={`cover`}
              src="/images/hookdeck.svg"
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
                <li>Date: {Pdata.gorgiasApp.date}</li>
                <li>Client: Hookdeck</li>
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
              <h2>Hookdeck</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                imperdiet est nisi, ac mattis diam laoreet a. Sed interdum
                luctus magna. Cras ultrices pellentesque quam. Ut dolor massa,
                fermentum venenatis tincidunt sed, interdum in nisi. Suspendisse
                potenti. Maecenas vel tellus tempus orci congue vulputate.
                Aliquam elementum felis dignissim porttitor aliquet. Sed
                accumsan nec leo ac ultrices. Nullam fringilla odio bibendum
                magna mollis porttitor. Integer venenatis diam enim, in tempor
                leo sodales non. Mauris semper tellus augue, a scelerisque justo
                aliquet vitae. Sed interdum nunc a dictum placerat. Curabitur
                fringilla lorem eget enim malesuada, at volutpat enim efficitur.
              </p>
            </div>
          </div>

          <FigmaEmbed embed={Pdata.hookdeck.embed} />

          <div className="block">
            <div className="c-left">
              <strong>Role</strong>
              <ul className="projectMeta">
                <li>Product Designer</li>
              </ul>
            </div>
            <div className="c-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
              <ul className="list">
                <li>Lore ipsum</li>
                <li>Lore ipsum</li>
                <li>Lore ipsum</li>
                <li>Lore ipsum</li>
              </ul>
            </div>
          </div>
          <div className="block">
            <div className="c-left">
              <strong>Files</strong>
              <ul className="projectMeta">
                <li>Download JPG files</li>
              </ul>
            </div>
            <div className="c-right">
              <ul className="list">
                <li>
                  <a href="#">PREVIEW_1: Automatic retries </a>
                </li>
                <li>
                  <a href="#">PREVIEW_2: Filters </a>
                </li>
                <li>
                  <a href="#">PREVIEW_3: Sidebar Redesign </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
