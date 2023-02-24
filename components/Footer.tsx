import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Subscribe from './Subscribe';

const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <footer className="siteFooter">
      {router.pathname.includes('/posts') ? <Subscribe /> : ''}
      <ul className="navLinks">
        <li>
          <Link href="/">
            <a>M</a>
          </Link>
        </li>
        <li>
          <Link href="/info">
            <a>info</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
