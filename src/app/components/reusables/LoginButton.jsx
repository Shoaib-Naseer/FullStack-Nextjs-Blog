import React from 'react'

const LoginButton = ({children, bgColor,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:bgColor }} className='p-5 my-4 rounded text-white cursor-pointer font-medium flex items-center justify-center border-none'>{children}</button>
  )
}

export default LoginButton