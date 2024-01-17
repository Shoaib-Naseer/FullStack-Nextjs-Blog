import React from 'react'
import Menu from '../../components/menu/Menu'
import Image from 'next/image'
import Comments from '../../components/comments/comments'


const getData = async (slug) => {
    const apiUrl = `http://localhost:3000/api/posts/${slug}`
    const res = await fetch(apiUrl, {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

const SinglePost = async ({params}) => {
    const { slug } = params;
    const data = await getData(slug)
    return (
        <div className=" mx-auto">
            <div className="infoContainer | flex flex-col md:flex-row">
                <div className='flex-1 flex flex-col justify-between'>
                    <h1 className="title | text-4xl md:text-5xl lg:text-6xl font-bold my-6 md:my-0">{data?.post.title}</h1>
                    <div className="user | flex gap-2 ">
                        {data?.post?.user?.image && <div className="userImageContainer | relative w-12 h-12">
                            <Image src={data.post.user.image} fill className='rounded-[50%]' />
                        </div>}
                        <div className="userTextContainer | flex flex-col text-custom-softTextColor">
                            <span className="username | text-lg">{data?.post?.user.name}</span>
                            <span className="date | font-light">01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className="postImageContainer | flex-1 relative w-full h-[320px]">
                    <Image src='/p1.jpeg' fill className='object-cover rounded' />
                </div>
            </div>
            <div className="content | flex gap-12">
                <div className="post | flex-[5] mt-6 md:mt-12">
                    <div className="description" dangerouslySetInnerHTML={{__html:data?.post.desc}} >
                    </div>
                    <div className="comments">
                        <h1 className="title | text-custom-softTextColor font-bold my-4 md:mb-8">Coments</h1>
                       
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>

        </div>
    )
}

export default SinglePost