import Link from "next/link"

import { useState, useEffect, useRef } from 'react'
import { api } from "~/trpc/server"
// import styles from "../styles/styles.css"

import { ClientWrapper } from "./components/ClientWrapper"

import { BookingModalContextProvider } from "./components/BookingModalContext"
import { BookingModal } from "./components/BookingModal"
import { Header } from "./components/Header"
import { Motif } from "./components/Motif"
import { AboutYou } from "./components/AboutYou"
import { HDivider } from "./components/HDivider"
import { CallToAction } from "./components/CallToAction"
import { CurveToLavender, 
         CurveFromLavender, 
         CurveToLavender2, 
         CurveFromLavender2,
         CurveToLavender3,
         CurveFromLavender3,
         CurveFromCream2,
         CurveToCream2,
         CurveFromCream1,
         CurveToCream1,
         CurveFromCream3,
         CurveToCream3 } from "./components/Curves"
import { HeadshotSection } from "./components/HeadshotSection"
import { SocialProof } from "./components/SocialProof"
import { About } from "./components/About"
import { MoreAbout } from "./components/MoreAbout"
import { Certification } from "./components/Certification"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"

import { AppContextProvider } from "./components/AppContext"

export default function Home() {

  return (
    <AppContextProvider>
      <ClientWrapper>
        <BookingModalContextProvider>
          <BookingModal />
        </BookingModalContextProvider>
        <Header />
        <Motif />
        {/* <HDivider />
        <CallToAction /> */}
        <AboutYou />
        <CurveFromCream1 />
        {/* <CurveToLavender /> */}
        <HeadshotSection />
        {/* <CurveFromLavender /> */}
        <CurveToCream1 />
        <SocialProof />
        <CurveFromCream2 />
        {/* <CurveToLavender2 /> */}
        <About />
        {/* <CurveFromLavender2 /> */}
        <CurveToCream2 />
        <MoreAbout />
        {/* <HDivider /> */}
        <CurveFromCream3 />
        {/* <CurveToLavender3 /> */}
        <Certification />
        {/* <CurveFromLavender3 /> */}
        <CurveToCream3 />
        <FAQ />
        <Footer />
      </ClientWrapper>
    </AppContextProvider>
  );

  
}
