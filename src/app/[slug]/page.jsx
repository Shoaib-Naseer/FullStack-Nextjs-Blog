import React from 'react'
import Menu from '../components/menu/Menu'
import Image from 'next/image'
import Comments from '../components/comments/comments'
import PostComment from '../components/reusables/PostComment'

const SinglePost = () => {
    return (
        <div className=" mx-auto">
            <div className="infoContainer | flex flex-col md:flex-row">
                <div className='flex-1 flex flex-col justify-between'>
                    <h1 className="title | text-4xl md:text-5xl lg:text-6xl font-bold my-6 md:my-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className="user | flex gap-2 ">
                        <div className="userImageContainer | relative w-12 h-12">
                            <Image src='/p1.jpeg' fill className='rounded-[50%]' />
                        </div>
                        <div className="userTextContainer | flex flex-col text-custom-softTextColor">
                            <span className="username | text-lg">John Doe</span>
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
                    <div className="description |">
                        <p className='font-light text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ab fuga adipisci consequatur modi quasi,
                            hic autem officiis qui, doloribus rerum minus. Suscipit minima consequatur id reiciendis, laborum cupiditate?
                        </p>
                        <h2 className='font-bold my-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <p className='font-light text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi explicabo libero molestiae at placeat quia deserunt eveniet ea officia voluptatem non, nobis quibusdam alias laborum ab quod dolore. Modi, fuga!
                        </p>
                    </div>
                    <div className="comments">
                        <h1 className="title | text-custom-softTextColor font-bold my-4 md:mb-8">Coments</h1>
                        <PostComment />
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>

        </div>
    )
}

export default SinglePost