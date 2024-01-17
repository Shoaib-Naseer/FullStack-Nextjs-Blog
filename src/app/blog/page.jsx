import React from 'react'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = ({ searchParams}) => {
  const page = parseInt(searchParams.page || 1);
  const { cat } = searchParams;

  return (
    <div className="container mx-auto">
        <h2 className="title | text-lg md:text-2xl text-center bg-[crimson] p-4 rounded">{cat} Blog</h2>
        <div className="content | flex">
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage