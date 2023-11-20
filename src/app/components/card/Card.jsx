import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const  Card = () => {
    return (
        <div className='postContainer | my-12 flex items-center gap-12'>
            <div className="imageContainer | flex-1 h-[460px] relative hidden lg:block">
                <Image src="/p1.jpeg" alt='' fill  className='object-cover rounded'/>
            </div>
            <div className="textContainer | flex-1 flex flex-col gap-2 md:gap-8">
                <div className="details | flex">
                    <span className="date | text-gray-700">15.11.2023 - </span>
                    <span className="category | font-[500] text-[crimson] ps-1">CULTURE</span>
                </div>
                <Link href="/"> <h1 className="title | font-bold text-xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1></Link>
                <p className='text-[18px] font-[300] text-custom-softTextColor'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Culpa adipisci tempore dolore tempora impedit rerum nemo est aperiam, 
                     porro saepe in omnis quidem pariatur eveniet molestias dicta eligendi temporibus dolorem.
                </p>
                <Link href="/" className='border-b-2 border-[crimson] w-max py-1 hover:text-[crimson] transition'>Read More</Link>
            </div>
        </div>
    )
}

export default Card