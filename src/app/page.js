'use client'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const apple=(item)=>{
      
      alert(`this is the apple `+item)
  }
  return (
    <main className={styles.main}>
      <Name name="Anurag" />
     
      <h1>I am learning react</h1>
      <button onClick={()=>alert("This is the home page bacche")}>Click me</button>
      <button onClick={()=>apple("banana")}>banana</button>
      <button>Apple</button>
      <button>Save</button>
    </main>
  );
}

const Name = (props) => {
  return <h1>My name is {props.name}</h1>;
};
