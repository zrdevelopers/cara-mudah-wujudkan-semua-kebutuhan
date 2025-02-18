import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="./assets/css/bootstrap.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link rel="stylesheet" href="./assets/css/fontawesome.all.min.css" />
        <link rel="stylesheet" href="./assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="./assets/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
