import Head from 'next/head';

export default function Metatags({
  title = 'A place to write blogs about cloud solutions',
  description = 'A place to write blogs about cloud solutions',
  //image = 'https://fireship.io/courses/react-next-firebase/img/featured.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />


      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

    </Head>
  );
}
/*<meta property="og:image" content={image} />
<meta name="twitter:image" content={image} />
 <meta name="twitter:site" content="@fireship_dev" />
 */