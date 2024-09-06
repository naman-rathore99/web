'use client';
import logo from "@/assets/company/ayncorewhiteicon.png";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const SITEMAP = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Our Team', 'Projects'],
  },
  {
    title: 'Help Center',
    links: ['Discord', 'Twitter', 'GitHub', 'Contact Us'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program'],
  },
  {
    title: 'Products',
    links: ['Templates', 'UI Kits', 'Icons', 'Mockups'],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='relative w-full '>
      <div className='mx-auto w-full max-w-8xl px-8'>
        <div className='mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 text-center'>
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className='w-full'>
              <div className='mb-4 font-bold uppercase text-black'>
                {title}
              </div>
              <ul className='space-y-1'>
                {links.map((link, key) => (
                  <li key={key} className='font-normal text-slate-500'>
                    <Link
                      href={`/${link}`}
                      className='inline-block py-1 pr-2 transition-transform hover:scale-105'
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex w-full flex-col items-center justify-center border-t border-slate-200 py-4 md:flex-row md:justify-between px-10'>
          <div className='mb-4 text-center md:mb-0'>
            <div className='flex lg:flex-1 items-center'>
              <Link href='/'>
                <div className='-m-1.5 p-1'>
                  {/* <span className="sr-only">Your Company</span> */}
                  <Image className='h-16 w-auto' src={logo} alt='' />
                </div>
              </Link>
              <div className='py-2 text-md flex items-center gap-1 font-medium'>
                &copy; AYNcore {currentYear}. All Rights Reserved.
              </div>
            </div>
          </div>
          <div className='flex gap-4 text-black sm:justify-center'>
            <Link
              href='tel:8104799731'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <BsInstagram size={20} />
            </Link>

            <Link
              href='mailto:1032201286@tcetmumbai.in'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <BsTwitterX size={20} />
            </Link>

            <Link
              href='https://yash-portfolio-six.vercel.app'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
