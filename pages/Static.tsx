import type { NextPage } from 'next';
import getConfig from 'next/config';
import Nav from '../components/Nav';

const { publicRuntimeConfig } = getConfig();

const Static: NextPage<{ now: number; imageUrl: string }> = (props) => {
  return (
    <main>
      <h1>Static Site Generation</h1>
      <h3>
        Direct from <code>publicRuntimeConfig</code>
      </h3>
      <p>
        <pre>
          <code>{`${publicRuntimeConfig?.imageUrl}/320/240`}</code>
        </pre>
      </p>
      <h3>
        Pass through <code>publicRuntimeConfig</code> to{' '}
        <code>getServerSideProps</code>
      </h3>
      <p>
        <pre>
          <code>{`${props.imageUrl}/320/240`}</code>
        </pre>
      </p>
      <Nav />
    </main>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      imageUrl: publicRuntimeConfig?.imageUrl ?? 'n.a.',
      now: Date.now(),
    },
  };
};

export default Static;
