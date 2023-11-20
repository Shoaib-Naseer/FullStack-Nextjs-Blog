'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);
  

  const handleToggle = () => {
    toggle();
  };

  return (
    <div className={`flex w-9 bg-black rounded-3xl h-5 items-center cursor-pointer justify-between relative transition-transform`} onClick={handleToggle}>
      <Image src="/sun.png" alt="moon" width={14} height={14} />
      <div className={`w-4 h-4 rounded-full bg-white absolute left-[1px] transition-transform ${theme=== 'dark' ? 'transform translate-x-[106%]' : ''}`}></div>
      <Image src="/moon.png" alt="sun" width={14} height={14} />
    </div>
  );
}

export default ToggleTheme;
