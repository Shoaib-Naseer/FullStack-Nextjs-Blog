import React from 'react'
import LoginButton from '../components/reusables/LoginButton'

const Login = () => {
  const buttons = [
    {title:"Sign in With Google", bgColor:'#ff5555'},
    {title:"Sign in With Github", bgColor:'#111'},
    {title:"Sign in With Facebook", bgColor:'#087BEA'}
  ]
  return (
    <div className='w-full flex items-center justify-center my-8'>
      <div className="login | flex flex-col px-[50px] sm:px-[100px] md:px-[200px] py-[150px] bg-custom-softBg rounded">
      {buttons.map((btn,index)=>(
        <LoginButton key={index} bgColor={btn.bgColor}>{btn.title}</LoginButton>
      ))}
      </div>
    </div>
  )
}

export default Login