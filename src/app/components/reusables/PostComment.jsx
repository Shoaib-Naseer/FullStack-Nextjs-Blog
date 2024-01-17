'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'


const PostComment = ({postSlug, mutate}) => {
    const [desc,setDesc] = useState("")

    const handleSubmit = async()=>{
        await fetch("http://localhost:3000/api/comments",{
            method:"POST",
            body:JSON.stringify({desc, postSlug})
        })
        setDesc("")
        mutate()
    }

    const {status} = useSession();
    return (
        <>
            {status === 'authenticated' ? (
                <div className="write | flex items-center justify-between gap-8">
                    <textarea placeholder='Write a comment' className='input | block p-2 w-full' value={desc} onChange={(e)=>setDesc(e.target.value)} />
                    <button className="button | px-4 py-2 text-white bg-[teal] font-medium border-none rounded cursor-pointer" onClick={handleSubmit} >
                        Comment
                    </button>
                </div>
            ) : (<Link href="/login">Login to write a comment</Link>)}
        </>
    )
}

export default PostComment