import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'

const Footer = (): JSX.Element => {
  
  const router = useRouter()
  
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <mark>{router.pathname.includes('/posts')? 'aa': 'bb'} </mark>
    </nav>
  );
};

export default Footer;
