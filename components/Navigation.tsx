import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navigation = (): JSX.Element => {
  const router = useRouter();
  return (
    <nav
      className={router.pathname.includes('posts') ? 'navBar pink' : 'navBar'}
    >
      <ul className="navLinks">
        <li>
          <Link href="/">
            <a>M</a>
          </Link>
        </li>
        <li>
          <Link href="/design">
            <a>design</a>
          </Link>
        </li>
        <li>
          <Link href="/nft">
            <a>art</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
