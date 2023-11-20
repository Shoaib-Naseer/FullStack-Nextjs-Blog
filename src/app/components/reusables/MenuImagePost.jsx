import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuBadgeContainer from './MenuPost';

const MenuImagePost = ({ data }) => {
  const { imageUrl } = data;
  return (
    <Link href="/" className="item | flex items-center gap-5 my-8">
      <div className="imageContainer | relative h-16 w-16">
        <Image src={imageUrl} alt="" fill className="rounded-[50%] object-cover border-[3px] border-solid border-[lightgray]" />
      </div>
        <MenuBadgeContainer data={data} />
    </Link>
  );
};

export default MenuImagePost;
