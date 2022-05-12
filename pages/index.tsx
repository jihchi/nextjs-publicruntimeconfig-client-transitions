import type { NextPage } from 'next';
import * as React from 'react';
import getConfig from 'next/config';
import Nav from '../components/Nav';

const { publicRuntimeConfig } = getConfig();

const Index: NextPage = () => {
  console.log('Index', publicRuntimeConfig);
  return (
    <main>
      <h1>
        Demo: <code>publicRuntimeConfig</code> does not work correctly with
        client page transitions.
      </h1>
      <h3>Static HTML (uses no initial props)</h3>
      <h4>
        Direct from <code>publicRuntimeConfig</code>
      </h4>
      <pre>
        <code>{`${publicRuntimeConfig?.imageUrl}/320/240`}</code>
      </pre>
      <Nav />
    </main>
  );
};

export default Index;
