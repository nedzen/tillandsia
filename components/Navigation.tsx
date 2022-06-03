import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="navBar">
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
