import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import FooterLink from '../reusables/FooterLink';

const Footer = () => {
  const linkSections = [
    {
      title: 'Links',
      links: [
        { label: 'Homepage', href: '/' },
        { label: 'Blog', href: '/' },
        { label: 'About', href: '/' },
        { label: 'Contact', href: '/' },
      ],
    },
    {
      title: 'Tags',
      links: [
        { label: 'Coding', href: '/' },
        { label: 'Styles', href: '/' },
        { label: 'Fashion', href: '/' },
        { label: 'Travel', href: '/' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Facebook', href: '/' },
        { label: 'Instagram', href: '/' },
        { label: 'Linkedin', href: '/' },
        { label: 'Twitter', href: '/' },
      ],
    },
  ];
  return (
    <div className='footer | pt-12 pb-6 flex gap-8 justify-between text-custom-softTextColor flex-col md:flex-row'>
      <div className="info | flex-1 flex flex-col gap-4">
        <div className="container | flex items-center gap-4">
          <div className="logoContainer | relative h-14 w-14">
            <Image src='/logo.png' fill className='rounded-[50%]' />
          </div>
          <h2 className='font-light text-xl'>Mindful Blog</h2>
        </div>
        <p className='text-sm md:w-[80%] py-2'>Explore fascinating stories and ideas with us.
          From tech insights to historical tales and beyond, we share bite-sized content
          for curious minds. Join us on a journey of discovery, one post at a time. Simple. Insightful. Always intriguing.
        </p>
        <div className="icons | flex gap-3">
          <Image src="/facebook.png" alt="" width={24} height={24} />
          <Image src="/instagram.png" alt="" width={24} height={24} />
          <Image src="/tiktok.png" alt="" width={24} height={24} />
          <Image src="/youtube.png" alt="" width={24} height={24} />
        </div>
      </div>

      <div className="links | flex-1 flex justify-between pt-4">
        {linkSections.map((section) => (
          <div key={section.title} className="list | flex flex-col gap-2 text-sm">
            <h2 className='text-lg font-medium pb-2'>{section.title}</h2>
            {section.links.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer