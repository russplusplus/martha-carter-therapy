// useEffect only works in client components
// "use client"

import Link from "next/link"

import { useState, useEffect } from 'react'
import { api } from "~/trpc/server"
import styles from "../styles/styles.css"

import { ClientContainer } from "./components/ClientContainer"

import { Header } from "./components/Header"
import { Motif } from "./components/Motif"
import { HDivider } from "./components/HDivider"
import { CallToAction } from "./components/CallToAction"
import { HeadshotSection } from "./components/HeadshotSection"
import { SocialProof } from "./components/SocialProof"
import { About } from "./components/About"
import { MoreAbout } from "./components/MoreAbout"
import { Certification } from "./components/Certification"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"

import { AppContextProvider } from "./components/AppContext"

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  function handleScroll() {
    console.log('scroll!')
  }

  // useEffect(() => {
  //   document.body.addEventListener('click', () => {
  //     console.log()
  //   })
  // }, [])

  return (
    <AppContextProvider>
      <ClientContainer>
        <Header />
        {/* <div className={styles.main}>
          <div className={styles.container}> */}
        <Motif />
        <HDivider />
        <CallToAction />
        <HeadshotSection />
        <SocialProof />
        <About />
        <MoreAbout />
        <HDivider />
        <Certification />
        <FAQ />
          {/* </div>
        </div> */}
        <Footer />
      </ClientContainer>
    </AppContextProvider>
  );

  
}
