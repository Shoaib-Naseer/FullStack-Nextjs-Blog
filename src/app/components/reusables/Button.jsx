import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='w-[100px] border-0 p-2 bg-[crimson] text-white rounded cursor-pointer'>{children}</button>
    )
}

export default Button