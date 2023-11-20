import React from 'react';
import styles from './categoryList.module.css'
import Image from 'next/image';
import Link from 'next/link';
import CategoryBadge from '../reusables/CategoryBadge';

const CategoryList = () => {
  const categories = [
    { name: 'Style', bgColor: '#57c4ff31', slug: 'style', image: '/style.png' },
    { name: 'Fashion', bgColor: '#da85c731', slug: 'fashion', image: '/fashion.png' },
    { name: 'Food', bgColor: '#7fb88133', slug: 'food', image: '/food.png' },
    { name: 'Travel', bgColor: '#ff795736', slug: 'travel', image: '/travel.png' },
    { name: 'Culture', bgColor: '#ffb04f45', slug: 'culture', image: '/culture.png' },
    { name: 'Coding', bgColor: '#5e4fff31', slug: 'coding', image: '/coding.png' },
  ];
  return (
    <div className={styles.container}>
      <h1 className='title | my-12 text-2xl font-bold '>Popular Categories</h1>
      <div className='categoriesContainer | flex gap-2 flex-wrap '>
        {categories.map((category) => (
          <div key={category.slug} className="categoryContainer ">
            <CategoryBadge category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryList