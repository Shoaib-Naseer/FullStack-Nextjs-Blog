import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Homepage' },
    { href: '/', label: 'Contact' },
    { href: '/', label: 'About' },
  ];
  return (
    <div className='flex items-center gap-2 sm:gap-0 justify-between h-[100px]'>
      <div className="gap-3 flex-1 hidden md:flex" >
        <Image src="/facebook.png" alt="" width={24} height={24} />
        <Image src="/instagram.png" alt="" width={24} height={24} />
        <Image src="/tiktok.png" alt="" width={24} height={24} />
        <Image src="/youtube.png" alt="" width={24} height={24} />
      </div>
      <div className="flex-1 text-left md:text-center font-light text-lg md:text-xl lg:text-2xl" >Mindful Blog</div>
      
      <div className="flex gap-5 flex-1 items-center sm:text-sm md:text-md lg:text-xl " >
      <ToggleTheme />
        <Link href="/" className='hidden md:block'>Homepage</Link>
        <Link href="/" className='hidden md:block'>Contact</Link>
        <Link href="/" className='hidden md:block'>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar