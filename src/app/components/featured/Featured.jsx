import React from 'react';
import styles from './featured.module.css'
import Image from 'next/image';

const Featured = () => {
  return (
    <div className="my-8 w-full">
      <h1 className='title | text-6xl md:text-7xl lg:text-8xl md:text-center'>
        Discover our stories and creative ideas.
      </h1>
      <div className='postContainer | mt-16 flex flex-col md:flex-row items-center gap-12'>
        <div className='md:flex-1 h-[500px] w-[100%] relative'>
          <Image src="/p1.jpeg" alt='' fill className='object-cover rounded' />
        </div>
        <div className='textContainer | flex-1 flex flex-col'>
          <h1 className='postTitle | text-4xl font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p className='postDescription | text-xl font-light color-custom-softTextColor'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aliquam quam, temporibus
            impedit excepturi dolore quos repellat enim et nostrum autem dicta vel hic architecto facere dignissimos fugit quia saepe.
          </p>
          <button className='px-4 py-3 mt-4 rounded border-none text-[var(--bg)] bg-custom-textColor w-max'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured