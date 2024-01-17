import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ item, key }) => {

    return (
        <div className='postContainer | my-12 flex items-center gap-12' key={key}>
            {item.img && <div className="imageContainer | flex-1 h-[460px] relative hidden lg:block">
                <Image src={item.img} alt='' fill className='object-cover rounded' />
            </div>
            }
            <div className="textContainer | flex-1 flex flex-col gap-2 md:gap-8">
                <div className="details | flex">
                    <span className="date | text-gray-700">{item.createdAt.substring(0, 10)} - </span>
                    <span className="category | font-[500] text-[crimson] ps-1">{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}> <h1 className="title | font-bold text-xl md:text-2xl lg:text-3xl">{item.title}</h1></Link>
                <p className='text-[18px] font-[300] text-custom-softTextColor'>
                    {item.desc.substring(0, 60)}
                </p>
                <Link href={`/posts/${item.slug}`} className='border-b-2 border-[crimson] w-max py-1 hover:text-[crimson] transition'>Read More</Link>
            </div>
        </div>
    )
}

export default Card