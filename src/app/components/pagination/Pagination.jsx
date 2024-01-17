'use client'
import React from 'react';
import Button from '../reusables/Button';
import { useRouter } from 'next/navigation';

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()
  return (
    <div className='flex justify-between px-4'>
      <Button onClick={() => router.push(`?page=${page - 1}`)} disabled={!hasPrev}>Last</Button>
      <Button onClick={() => router.push(`?page=${page + 1}`)} disabled={!hasNext}>Next</Button>
    </div>
  )
}

export default Pagination