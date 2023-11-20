import React from 'react';

const Badge = ({ children, bgColor }) => {
  const badgeClasses = `badge text-white px-[8px] py-[4px] text-xs w-max rounded-full opacity-90`;

  return <span style={{backgroundColor:bgColor}} className={badgeClasses}>{children}</span>;
};

export default Badge;
