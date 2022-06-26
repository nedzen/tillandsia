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
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </li>
        <li>
          <Link href="/nft">
            <a>NFT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
