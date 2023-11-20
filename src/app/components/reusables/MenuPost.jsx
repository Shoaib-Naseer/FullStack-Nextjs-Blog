import React from 'react'
import Badge from './Badge'

const MenuPost = ({data,editorPick}) => {
    const { category, title, author, date, bgColor } = data;
    return (
        <div className={`menuContainer flex-[4] flex flex-col gap-1 ${editorPick && 'my-8'}`}>
        <Badge bgColor={bgColor}>{category}</Badge>
        <h2 className="title | text-[16px] text-custom-softTextColor font-medium">{title}</h2>
        <div className="details | flex gap-1 text-sm">
          <span className="author">{author} -</span>
          <span className="date | text-gray-600">{date}</span>
        </div>
      </div>
    )
}

export default MenuPost