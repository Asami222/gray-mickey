"use client";

import { useEffect, useState } from "react";
import FirstView from "./_components/firstView"
import SecondView from "./_components/secondView";
import styles from "./page.module.css";

export default function Home() {

  const[count, setcount] = useState(5);

    useEffect(() => {
        const t = setInterval(() => {
            
            setcount(c => c > 0 ? c - 1 : 0);
            
        },1000);

        return () => {
            clearInterval(t);
        };
    },[]);

  return (
      <>
      
        <SecondView count={count} />
      </>
  )
}