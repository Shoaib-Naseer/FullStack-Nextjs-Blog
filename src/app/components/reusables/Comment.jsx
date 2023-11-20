import Image from 'next/image'
import React from 'react'

const Comment = ({ user, date, content }) => {
    return (
        <div className="comment | my-4">
            <div className="user | flex gap-2">
                <Image src={user.avatar} alt={user.name} width={50} height={50} className='object-cover rounded-[50%] h-[50px]' />
                <div className="userInfo | flex flex-col gap-1 text-custom-softTextColor">
                    <span className="username | font-medium">{user.name}</span>
                    <span className="date | text-[14px]">{date}</span>
                </div>
            </div>
            <p className="desc | text-sm font-light py-2 ">
                {content}
            </p>
        </div>
    )
}

export default Comment