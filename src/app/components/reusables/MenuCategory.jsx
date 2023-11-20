import Link from 'next/link'
import React from 'react'

const MenuCategory = ({children,category}) => {
    return (
        <>
            <Link
                style={{ backgroundColor: category.bgColor }}
                className='px-4 py-2 rounded text-sm text-custom-textColor'
                href={`blog?cat=${category.slug}`}
            >
                {children}
            </Link></>
    )
}

export default MenuCategory