import React from 'react'
import Link from 'next/link'
// Normal Routing 

export default function About() {
  return (
    <div>
   <h1> About Page </h1>
    <Link href={"/"}>Go to Home</Link>
    <br/>
    <Link href={"/about/aboutcomp"}>Go to about comp</Link>
    <br/>
    <Link href={"/about/aboutstudent"}>Go to about student</Link>

    
    </div>

  )
}
