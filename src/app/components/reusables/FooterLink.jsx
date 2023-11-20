import Link from 'next/link'
import React from 'react'

const FooterLink = ({children,href}) => {
  return (
    <>
        <Link href={href}><span className='hover:text-[crimson]'>{children}</span></Link>
    </>
  )
}

export default FooterLink