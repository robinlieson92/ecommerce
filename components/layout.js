import Head from 'next/head';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <main>
      <div className="has-text-centered">
        { children }
      </div>
    </main>
  </div>
);

export default Layout;