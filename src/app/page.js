"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  // function declaration
 const navigate=(name)=>{
    router.push(name);
 }
  const apple = (item) => {
    setName("Raj");
    alert(`this is the  ` + item);
  };

  // use of hooks
  const [name, setName] = useState("Apple");
  const router=useRouter();
  return (
    <main className={styles.main}>
      <Name name="Anurag" />

      <h1>I am learning react</h1>
      <div>
        <button onClick={() => alert("This is the home page bacche")}>
          Click me
        </button>
        <button onClick={() => apple("banana")}>banana</button>
        <h1>{name}</h1>
      </div>
      {/* implementation of links */}
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to About page</Link>

      {/* navigation through buttonsa */}
      <button onClick={()=>navigate("/login")}>Go to login page</button>
      <button onClick={()=>navigate("/about")}>Go to about page</button>
    </main>
  );
}

const Name = (props) => {
  return <h1>My name is {props.name}</h1>;
};
