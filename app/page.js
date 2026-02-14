'use client'
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";

export default function Home() {

  const[loaded,setLoaded]=useState(false)

  useEffect(()=>{
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); 

    return () => clearTimeout(timer);

  },[])

  return (
    <section className="h-screen w-full">
      {
        !loaded ? (
          <LoadingScreen />
        ) : (
          <HeroSection />
        )
      }
    </section>
  );
}
