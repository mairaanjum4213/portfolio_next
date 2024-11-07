"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-4 lg:py-0'>
      <div className='max-container flexBetween'>
        <Link href="/" className='bold-28 capitalize relative'>
          Mai<span className='text-blue-700'>ra</span>
          <span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10'></span>
        </Link>

        {/* Desktop Links */}
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <Image
          src="menu.svg"
          alt="menu"
          width={28}
          height={28}
          className='inline-block cursor-pointer lg:hidden'
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className='absolute top-full left-0 w-full bg-white shadow-lg ring-1 ring-slate-100 lg:hidden flex flex-col items-center py-4'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white w-full text-center px-4 py-2 transition-all duration-300'
              onClick={toggleMobileMenu}  // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
