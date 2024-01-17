import React from 'react';
import CategoryBadge from '../reusables/CategoryBadge';

const getData = async ()=>{
  const apiUrl = `http://localhost:3000/api/categories`;
  const res = await fetch(apiUrl , {
    cache: "no-store"
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}
const CategoryList =async () => {
  const data = await getData()
  const categories = [
    { name: 'Style', bgColor: '#57c4ff31', slug: 'style', image: '/style.png' },
    { name: 'Fashion', bgColor: '#da85c731', slug: 'fashion', image: '/fashion.png' },
    { name: 'Food', bgColor: '#7fb88133', slug: 'food', image: '/food.png' },
    { name: 'Travel', bgColor: '#ff795736', slug: 'travel', image: '/travel.png' },
    { name: 'Culture', bgColor: '#ffb04f45', slug: 'culture', image: '/culture.png' },
    { name: 'Coding', bgColor: '#5e4fff31', slug: 'coding', image: '/coding.png' },
  ];
  return (
    <div>
      <h1 className='title | my-12 text-2xl font-bold '>Popular Categories</h1>
      {data && data.length > 0 ? (
        <div className='categoriesContainer | flex gap-2 flex-wrap '>
          {data.map((category) => (
            <div key={category._id} className="categoryContainer ">
              <CategoryBadge category={category} />
            </div>
          ))}
        </div>
      ) : (
        <p className='font-light opacity-70'>No categories currently available.</p>
      )}
    </div>
  )
}

export default CategoryList