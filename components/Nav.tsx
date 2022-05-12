import * as React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">Navigate to /</Link>
      </li>
      <li>
        <Link href="/Server">Navigate to /Server</Link>
      </li>
      <li>
        <Link href="/Static">Navigate to /Static</Link>
      </li>
      <li>
        <Link href="/redirect?dest=Server">Redirect to /Server</Link>
      </li>
      <li>
        <Link href="/redirect?dest=Static">Redirect to /Static</Link>
      </li>
    </ul>
  );
};

export default Nav;
