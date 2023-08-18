"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  const navigate =(name)=>{
    router.push(name)
  }
  const [name, setname] = useState("Anil");
  const apple = (item) => {
    setname("sidhu");
  };
  const InnerComp = () => {
    return <h1>Inner Component</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Hello, function & events ,{name}</h1>
      <button onClick={() => apple("fruits")}>Click me</button>
      <button onClick={()=>navigate("/login")}>login here</button>
      <button onClick={()=>navigate("/about")}>about here</button>
      {/* <InnerComp/> */}
      {InnerComp()}
      {/* <User name="Anil"/>
          <User name="Sunil"/>
          <User name="Amit"/>
           <h1>Hello</h1> */}
    </main>
  );
}

// const User=(props)=>{
//   return (
//     <>
//       <h1>User {props.name} is compulsory.</h1>
//     </>
//   )
// }
