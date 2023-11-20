import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Comment from '../reusables/Comment';

const Comments = () => {
    const comments = [
        {
            id: 1,
            user: {
                name: 'John Doe',
                avatar: '/p1.jpeg',
            },
            date: '01.01.2024',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
        },
        {
            id: 2,
            user: {
                name: 'John Doe',
                avatar: '/p1.jpeg',
            },
            date: '02.01.2024',
            content: 'Another comment with the same avatar...',
        },
        {
            id: 3,
            user: {
                name: 'John Doe',
                avatar: '/p1.jpeg',
            },
            date: '03.01.2024',
            content: 'Yet another comment with the same avatar...',
        },
    ];
    return (
        <div className="comments | my-8">
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    user={comment.user}
                    date={comment.date}
                    content={comment.content}
                />
            ))}
        </div>

    )
}

export default Comments 