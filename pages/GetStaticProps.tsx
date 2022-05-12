import type { NextPage } from 'next';
import getConfig from 'next/config';
import Nav from '../components/Nav';

const { publicRuntimeConfig } = getConfig();

const GetStatisProps: NextPage<{ imageUrl: string }> = (props) => {
  console.log('GetStatisProps', publicRuntimeConfig);
  return (
    <main>
      <h1>Static HTML + JSON (uses getStaticProps)</h1>
      <h4>
        Direct from <code>publicRuntimeConfig</code>
      </h4>
      <pre>
        <code>{`${publicRuntimeConfig?.imageUrl}/320/240`}</code>
      </pre>
      <h4>
        Pass through <code>publicRuntimeConfig</code> to &nbsp;
        <code>getStaticProps</code>
      </h4>
      <pre>
        <code>{`${props.imageUrl}/320/240`}</code>
      </pre>
      <Nav />
    </main>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      imageUrl: publicRuntimeConfig?.imageUrl ?? '<undefined>',
    },
  };
};

export default GetStatisProps;
