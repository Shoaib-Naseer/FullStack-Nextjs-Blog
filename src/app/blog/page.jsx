import React from 'react'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = () => {
  return (
    <div className="container mx-auto">
        <h2 className="title | text-lg md:text-2xl text-center bg-[crimson] p-4 rounded">Style Blog</h2>
        <div className="content | flex">
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage