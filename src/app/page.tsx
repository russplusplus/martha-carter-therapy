import Link from "next/link"

import { useState, useEffect, useRef } from 'react'
import { api } from "~/trpc/server"
// import styles from "../styles/styles.css"

import { ClientWrapper } from "./components/ClientWrapper"

import { BookingModalContextProvider } from "./components/BookingModalContext"
import { BookingModal } from "./components/BookingModal"
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

  return (
    <AppContextProvider>
      <ClientWrapper>
        <BookingModalContextProvider>
          <BookingModal />
        </BookingModalContextProvider>
        <Header />
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
        <Footer />
      </ClientWrapper>
    </AppContextProvider>
  );

  
}
