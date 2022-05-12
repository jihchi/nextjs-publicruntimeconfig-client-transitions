import type { NextPage } from 'next';
import getConfig from 'next/config';
import Nav from '../components/Nav';

const { publicRuntimeConfig } = getConfig();

const GetServerSideProps: NextPage<{ imageUrl: string }> = (props) => {
  console.log('GetServerSideProps', publicRuntimeConfig);
  return (
    <main>
      <h1>Server-side renders at runtime (uses getServerSideProps)</h1>
      <h4>
        Direct from <code>publicRuntimeConfig</code>
      </h4>
      <pre>
        <code>{`${publicRuntimeConfig?.imageUrl}/320/240`}</code>
      </pre>
      <h4>
        Pass through <code>publicRuntimeConfig</code> to &nbsp;
        <code>getServerSideProps</code>
      </h4>
      <pre>
        <code>{`${props.imageUrl}/320/240`}</code>
      </pre>
      <Nav />
    </main>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      imageUrl: publicRuntimeConfig?.imageUrl ?? '<undefined>',
    },
  };
};

export default GetServerSideProps;
