'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link href='/' className='logo-link'>
          <Image
            src='/images/rel_logo_.png'
            alt='Real Edge'
            width={140}
            height={28}
          />
        </Link>
      </div>

      <nav className='nav' aria-label='Main navigation'>
        <div>
          <Link href='/courses'>For Individuals</Link>
        </div>
        <div>
          <Link href='#'>For Corporate</Link>
        </div>
        <div>
          <Link href='#'>About us</Link>
        </div>
        <div>
          <Link href='#'>Sign In</Link>
        </div>
        <div className='signup'>Sign Up</div>
      </nav>
    </header>
  );
}
