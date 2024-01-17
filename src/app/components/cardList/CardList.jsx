import React from 'react';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';


const getData = async (page=1,cat="") => {
  const apiUrl = `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
    const res = await fetch(apiUrl, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const CardList = async ({ page,cat }) => {
  const {posts,count} = await getData(page,cat)

  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page-1) > 0;
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;


  return (
    <div className="flex-[2]">
      <div className="postsContainer">
        {
          posts?.length > 0 ? (
            posts.map(item => {
              return <Card item={item} key={item.id} />
            })
          ) : <p className='opacity-70'> No Posts to show</p>
        }
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList