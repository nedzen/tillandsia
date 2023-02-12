import React from 'react';
import Layout from '../components/Layout';
// import Image from 'next/dist/client/image';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

// const PortofolioPic = (props: any) :any => {
//   // const {image, desc} = props
//   // const image = props.image
//   // const desc = props.desc

//   return <li>{props}</li>
// };

// export const GridWrap = (props : any) :any => <div {...props}/>

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
        <h1 className="postTitle">Design</h1>
      </header>

      <main className="DSGN">
        <section className="row">
          <h2>Gorgias - Helpcenter</h2>

          {/* {portfolioPics.filter((p) => p.} */}
          <mark>
            {data.gorgiasApp.date}
            {/* {data.gorgiasApp.images.map((el) => el.url)} */}
            {data.gorgiasApp.images[0].url}
          </mark>

          <div className="row">
            <div className="col1">
              <h3>Project</h3>
            </div>
            <div className="col2">x vvv</div>
          </div>
        </section>

        <ul>
          {/* {
            portfolioPics.map((pic, index) => {
              
              return (
                <li key={index}>
                  {pic.image}
                  {pic.desc}
                  <Image
                    blurDataURL="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    placeholder="blur"
                    alt={`Bridge`}
                    src={pic.image}
                    width={pic.w}
                    height={pic.h}
                    priority
                  />
                </li>
              )

            })
          } */}
        </ul>
        <p>/more/</p>
      </main>
    </Layout>
  );
};

export default About;
