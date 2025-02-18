import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const domain = "https://zrdevelopers.github.io/cara-mudah-wujudkan-semua-kebutuhan";

  return (
    <Html lang="en">
      <Head>
        <link href={`${domain}/assets/css/bootstrap.css`} rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link rel="stylesheet" href={`${domain}/assets/css/fontawesome.all.min.css`} />
        <link rel="stylesheet" href={`${domain}/assets/css/fontawesome.min.css`} />
        <link rel="stylesheet" href={`${domain}/assets/css/font-awesome.min.css`} />
        <link rel="stylesheet" type="text/css" href={`${domain}/assets/css/style.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
