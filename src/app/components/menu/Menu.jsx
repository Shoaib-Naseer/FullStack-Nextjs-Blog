import React from 'react';
import MenuImagePost from '../reusables/MenuImagePost';
import MenuPost from '../reusables/MenuPost';
import MenuCategory from '../reusables/MenuCategory';

const Menu = () => {
  const badges = [
    { name: 'Travel', bgColor: 'crimson' },
    { name: 'Culture', bgColor: '#ffb04f45' },
    { name: 'Coding', bgColor: '#5e4fff31' },
    { name: 'Fashion', bgColor: '#da85c731' },
  ];

  const dataArray = [
    {
      imageUrl: '/p1.jpeg',
      category: 'Travel',
      bgColor: '#ff7857',
      title: 'Lorem ipsum dolor sit amet consectetur adipising elit.',
      author: 'John Doe',
      date: '01.09.2023',
    },
    {
      imageUrl: '/p1.jpeg',
      category: 'Culture',
      bgColor: '#ffb14f',
      title: 'Lorem ipsum dolor sit amet consectetur adipising elit.',
      author: 'John Doe',
      date: '01.09.2023',
    },
    {
      imageUrl: '/p1.jpeg',
      category: 'Fashion',
      bgColor: '#ff7887',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      author: 'Jane Smith',
      date: '02.09.2023',
    },
    {
      imageUrl: '/p1.jpeg',
      category: 'Food',
      bgColor: '#7fb881',
      title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'Robert Johnson',
      date: '03.09.2023',
    },
    // Add more data objects as needed
  ];
  
  return (
    <div className="flex-1 hidden md:block mt-8">
      <h2 className='text-gray-700 text-[16px] font-light'>{"What's hot"}</h2>
      <h1 className=' font-bold text-2xl lg:text-3xl"'>Most Popular</h1>
      <div className="items | my-4 ">
        {dataArray.map((data, index) => (
          <MenuImagePost key={index} data={data} />
        ))}
      </div>
      <div className='my-10'>
        <h2 className='text-gray-700 text-[16px] font-light'>Discover by topic</h2>
        <h1 className=' font-bold text-2xl lg:text-3xl"'>Categories</h1>
        <div className="items | my-4 flex flex-wrap gap-2 ">
          {badges.map((data, index) => (
            <MenuCategory key={index} category={data}>{data.name}</MenuCategory>
          ))}
        </div>
      </div>

      <div className='my-10'>
        <h2 className='text-gray-700 text-[16px] font-light'>Choosen by the editor</h2>
        <h1 className=' font-bold text-2xl lg:text-3xl"'>Editors Pick</h1>
        <div className="items | my-4 ">
          {dataArray.map((data, index) => (
            <MenuPost key={index} data={data} editorPick={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu