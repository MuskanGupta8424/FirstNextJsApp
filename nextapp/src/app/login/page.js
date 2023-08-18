"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login() {
  const router =useRouter();
  return (
    <>
      <div>Login Page</div>
      <br/>

      <Link href="/">Go to Home</Link>
      <br/>
      <br/>
{/* Nexted routing */}
    <button onClick={()=>router.push("/login/loginstudent")}>Go to login student page</button>

    </>
  );
}
