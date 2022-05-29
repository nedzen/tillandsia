import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import Subscribe from './Subscribe';

const Footer = (): JSX.Element => {
  const router = useRouter()
  
  return (
    <footer className='siteFooter'>
      { router.pathname.includes('/posts')? <Subscribe/> : '' }
      <ul className='navLinks'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
