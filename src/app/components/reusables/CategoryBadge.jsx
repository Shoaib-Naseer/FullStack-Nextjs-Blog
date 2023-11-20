import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryBadge = ({category}) => {
    return (
        <>
            <Link
                style={{ backgroundColor: category.bgColor }}
                className={`flex items-center py-4 px-6 rounded justify-between gap-2 `}
                href={`blog?cat=${category.slug}`}
            >
                <Image  
                    src={category.image}
                    width={32}
                    height={32}
                    className='rounded-[50%] h-[32px]'
                />
                {category.name}
            </Link></>
    )
}

export default CategoryBadge