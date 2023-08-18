"use client"
// Nexted Routing 
import React from 'react'
import { useRouter } from 'next/navigation'

export default function LoginStudent() {
    const router=useRouter();
  return (
    <>
    <div>Login Student page</div>
    <button onClick={()=>router.push("/login")}>Go to login page</button>
    </>
  )
}
