import React from 'react'
import {SOCIALS,FOOTER_LINKS} from "../constants"
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
   <footer className='max-container padding-container bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 pt-24 pb-8 text-white'>
    <div className='flex flexBetween flex-col gap-14 md:flex-row pb-16'>
      <ul>
        {
          FOOTER_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className='p-4 text-[15px] font-[500] hover:text-blue-500'>{link.label}</Link>
          ))
        }
      </ul>

      <ul className='regular-14 flex gap-4 text-gray-30'>
        {
          SOCIALS.map((social)=>(
            <Link href={social.href} key={social.key} className='h-10 w-10 border-[0.01rem] border-gray-20 flexCenter rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all'>
            <Image src={social.imgURL} alt={social.key} width={20} height={20} className='invert-[100]'/>
            </Link>
          ))
        }

      </ul>

    </div>

   </footer>
  )
}

export default Footer
