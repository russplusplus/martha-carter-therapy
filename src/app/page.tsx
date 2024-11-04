import { ClientWrapper } from "./components/ClientWrapper"
import { BookingModal } from "./components/BookingModal"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AboutYou } from "./components/AboutYou"
import { Footer } from "./components/Footer"

export default function Home() {

  return (
    <ClientWrapper>
      <BookingModal />
      <Header />
      <Hero />
      <AboutYou />
      <Footer />
    </ClientWrapper>
  );
}