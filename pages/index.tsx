import type { NextPage } from 'next';
import * as React from 'react';
import Nav from '../components/Nav';

const Index: NextPage = () => {
  return (
    <main>
      <h1>
        Demo: <code>publicRuntimeConfig</code> does not work correctly with
        client page transitions.
      </h1>
      <Nav />
    </main>
  );
};

export default Index;
