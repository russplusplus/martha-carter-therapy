import { ClientWrapper } from "../components/ClientWrapper"
import { BookingModal } from "../components/BookingModal"
import { Header } from "../components/Header"
import { CurveFromCream2,
         CurveFromCream1,
         CurveToCream1,
         CurveToCream3 } from "../components/Curves"
import { AboutMe } from "../components/AboutMe"
import { SocialProofWrapper } from "../components/SocialProofWrapper"
import { SocialProof1, SocialProof2 } from "../components/SocialProof"
import { GetStarted } from "../components/GetStarted"
import { Certification } from "../components/Certification"
import { Footer } from "../components/Footer"

export default function Page() {

  return (
    <ClientWrapper>
      <BookingModal />
      <Header />
      <CurveFromCream1 />
      <AboutMe />
      <CurveToCream1 />
      <SocialProofWrapper>
        <SocialProof1 />
        <SocialProof2 />
      </SocialProofWrapper>
      <CurveFromCream2 />
      <Certification />
      <CurveToCream3 />
      <GetStarted />
      <Footer />
    </ClientWrapper>
  );
}
