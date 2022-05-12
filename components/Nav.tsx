import * as React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/GetServerSideProps">Go to /GetServerSideProps</Link>
      </li>
      <li>
        <Link href="/GetInitialProps">Go to /GetInitialProps</Link>
      </li>
      <li>
        <Link href="/GetStaticProps">Go to /GetStaticProps</Link>
      </li>
    </ul>
  );
};

export default Nav;
