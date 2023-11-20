import React from 'react';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const CardList = () => {
  return (
    <div className="flex-[2]">
      <div className="postsContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    <Pagination />
    </div>
  )
}

export default CardList