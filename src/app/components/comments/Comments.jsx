"use client";
import React from 'react'
import Comment from '../reusables/Comment';
import useSWR from 'swr';
import PostComment from '../reusables/PostComment';


const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message)
        throw error;
    }
    return data.comments

}

const Comments = ({ postSlug }) => {
    const { data,mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)  
    return (
        <div className="comments | my-8">
             {mutate && <PostComment postSlug={postSlug} mutate={mutate} />}
            {isLoading ? "loading" : data?.map(comment => (
                <Comment
                    key={comment.id}
                    user={comment.user}
                    date={comment.createdAt}
                    content={comment.desc}
                />
            ))}
        </div>
    )
}

export default Comments 