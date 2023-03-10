import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id="860a7cfd-12b0-4c54-bd3e-fb80474bb3a3"
            src="https://analytics.umami.is/script.js"
          ></script>
          <script
            async
            src="https://tag.clearbitscripts.com/v1/pk_bb6b0005c940b1546de4e76ef938542d/tags.js"
            referrerPolicy="strict-origin-when-cross-origin"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
