"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {
    const [open, setOpen] = useState(true)
    const [file, setFile] = useState(null);
    const [value, setValue] = useState('');
    return (
        <div className='relative'>
            <input type="text" placeholder='Title' className='w-full focus:outline-none px-4 py-2 text-4xl md:text-8xl bg-transparent rounded' />
            <div className="editor | flex flex-col gap-5 h-[700px] my-4 relative">
                <button className='ms-4 w-[36px] h-[36px] cursor-pointer border border-[#1a8917] rounded-[50%] bg-transparent inline-flex items-center justify-center' onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' width={16} height={16} />
                </button>
                {open && (
                    <div className="add | flex gap-4 bg-custom-bg absolute left-14 px-4 py-2 -mt-2 rounded z-99">
                        <input type="file" id="image" onChange={() => setFile(e.target.files[0])} style={{ display: none }} />

                        <label htmlFor="image">
                            <button className='w-[36px] h-[36px] cursor-pointer border border-[#1a8917] rounded-[50%] bg-transparent inline-flex items-center justify-center'>
                                <Image src='/image.png' width={16} height={16} />
                            </button>
                            <button className='w-[36px] h-[36px] cursor-pointer border border-[#1a8917] rounded-[50%] bg-transparent inline-flex items-center justify-center'>
                                <Image src='/video.png' width={16} height={16} />
                            </button>
                            <button className='w-[36px] h-[36px] cursor-pointer border border-[#1a8917] rounded-[50%] bg-transparent inline-flex items-center justify-center'>
                                <Image src='/external.png' width={16} height={16} />
                            </button>
                        </label>
                    </div>
                )}

                <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story....' />
            </div>

            <button className="publish | absolute cursor-pointer top-1 right-0 text-white rounded-full px-5 py-2 bg-[#1a8917] ">Publish</button>
            <button className="publish | absolute cursor-pointer bottom-0 right-0 text-white rounded-full  px-5 py-2 bg-[#1a8917] ">Publish</button>
        </div>
    )
}

export default WritePage