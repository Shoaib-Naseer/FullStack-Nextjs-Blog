import Link from 'next/link';
import React from 'react'

const PostComment = () => {

    const status = "authenticated";
    return (
        <>
            {status === 'authenticated' ? (
                <div className="write | flex items-center justify-between gap-8">
                    <textarea placeholder='Write a comment' className='input | block p-2 w-full' />
                    <button className="button | px-4 py-2 text-white bg-[teal] font-medium border-none rounded cursor-pointer">
                        Send
                    </button>
                </div>
            ) : (<Link href="/login">Login to write a comment</Link>)}
        </>
    )
}

export default PostComment