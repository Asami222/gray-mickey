"use client";

import { useEffect, useState } from "react";
import FirstView from "./_components/firstView"
import SecondView from "./_components/secondView";

export default function Home() {

  const[count, setCount] = useState(5);

  const go = () => {
    setCount(0)
  }

    useEffect(() => {
        const t = setInterval(() => {
            
            setCount(c => c > 0 ? c - 1 : 0);
            
        },1000);

        return () => {
            clearInterval(t);
        };
    },[]);

  return (
      <>
        { count > 0 && <FirstView count={count} Go={go}/>}
        { count === 0 && <SecondView count={count} />}
      </>
  )
}