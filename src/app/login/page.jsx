'use client'
import React from 'react'
import LoginButton from '../components/reusables/LoginButton'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const {data,status} = useSession()
  console.log(data,status)
  const router = useRouter()

  const handleGoogleLogin = () => {
    signIn("google")
  };

  const handleGithubLogin = () => {
    signIn("github")
  };

  const handleFacebookLogin = () => {
    signIn("facebook")
  };

  const buttons = [
    { title: "Sign in With Google", bgColor: "#ff5555", onClick: handleGoogleLogin },
    { title: "Sign in With Github", bgColor: "#111", onClick: handleGithubLogin },
    { title: "Sign in With Facebook", bgColor: "#087BEA", onClick: handleFacebookLogin },
  ];

  if(status=== 'loading'){
    return(
      <div>
        Loading
      </div>
    )
  }

  if(status === 'authenticated') {
    router.push("/")
  }
  return (
    <div className='w-full flex items-center justify-center my-8'>
      <div className="login | flex flex-col px-[50px] sm:px-[100px] md:px-[200px] py-[150px] bg-custom-softBg rounded">
      {buttons.map((btn,index)=>(
        <LoginButton key={index} bgColor={btn.bgColor} onClick={btn.onClick}>{btn.title}</LoginButton>
      ))}
      </div>
    </div>
  )
}

export default Login