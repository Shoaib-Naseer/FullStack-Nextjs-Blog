'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    const status = 'authenticated';
    return (
        <>
            {status !== "authenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className='cursor-pointer'>Logout</span>
                </>
            )}
            <div className="md:hidden ml-auto">
                <button className="navbar-burger flex items-center p-3" onClick={() => setOpen(!open)}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
                {open && <div className='absolute flex flex-col items-center justify-center gap-[50px] w-[100%] pr-[20px] right-0 bg-custom-bg h-[calc(100vh-120px)] '>
                    <Link href="/" className=''>Homepage</Link>
                    <Link href="/" className=''>Contact</Link>
                    <Link href="/" className=''>About</Link>
                    {status !== "authenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className='cursor-pointer'>Logout</span>
                        </>
                    )}
                </div>}
            </div>

        </>
    )
}

export default AuthLinks