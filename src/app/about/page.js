"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const About=()=>{
    const router=useRouter();
    return(
        <div>
            <h1>this is the about page </h1>
            <button onClick={()=>{router.push("/")}}>Go to home page</button>
            <br/>
            <br/>
            <Link href="/about/aboutColleg">Go to college page</Link>
        </div>
    )
}
export default About;