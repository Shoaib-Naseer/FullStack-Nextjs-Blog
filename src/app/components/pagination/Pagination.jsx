import React from 'react';
import styles from './pagination.module.css'
import Button from '../reusables/Button';

const Pagination = () => {
  return (
    <div className='flex justify-between'>
      <Button>Last</Button>
      <Button>Next</Button>
    </div>
  )
}

export default Pagination