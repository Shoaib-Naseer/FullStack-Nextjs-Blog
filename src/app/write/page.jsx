"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase'
import { useRouter } from 'next/navigation'

const storage = getStorage(app);

const WritePage = () => {

    const router = useRouter();

    const [open, setOpen] = useState(true)
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("")
    const [value, setValue] = useState('');
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL)
                    });
                }
            );
        }
        file && upload();
    }, [file])

    const slugify = (str) => str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_=]/g, "-").replace(/^-+|-+$/g, "")

    const handleSubmit = async () => {
        if (!title.trim() || !value.trim() || !catSlug.trim()) {
            alert("Please fill in all the required fields.");
            return;
        }
        const res = await fetch("api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "general", //If not selected, choose the general category

            })
        })
        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.post.slug}`);
        }
    }

    return (
        <div className='relative'>
            <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} className='w-full focus:outline-none px-4 py-2 text-4xl md:text-8xl bg-transparent rounded' />
            <label className=' ml-8'>Select Category</label>
            <select className="px-8 my-6 w-max ml-8 bg-transparent border-gray-700 border rounded py-2 cursor-pointer" onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className="editor | flex flex-col gap-5 h-[700px] my-4 relative">
                <button className='ms-4 w-[36px] h-[36px] cursor-pointer border border-[#1a8917] rounded-[50%] bg-transparent inline-flex items-center justify-center' onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' width={16} height={16} />
                </button>
                {open && (
                    <div className="add | flex gap-4 bg-custom-bg absolute w-full  left-14 px-4 py-2 -mt-2 rounded z-99">
                        <input type="file" id="image" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />

                        <label htmlFor="image" className='flex gap-4 w-full'>
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

            <button className="publish | absolute cursor-pointer top-1 right-0 text-white rounded-full px-5 py-2 bg-[#1a8917] " onClick={handleSubmit}>Publish</button>
            <button className="publish | absolute cursor-pointer bottom-0 right-0 text-white rounded-full  px-5 py-2 bg-[#1a8917] " onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default WritePage