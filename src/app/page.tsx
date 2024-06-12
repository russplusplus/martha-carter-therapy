import Link from "next/link"

import { api } from "~/trpc/server"
import styles from "../styles/styles.css"
import { Motif } from "./components/Motif"
import { HDivider } from "./components/HDivider"
import { CallToAction } from "./components/CallToAction"
import { HeadshotSection } from "./components/HeadshotSection"
import { SocialProof } from "./components/SocialProof"
import { About } from "./components/About"
import { MoreAbout } from "./components/MoreAbout"
import { Certification } from "./components/Certification"
import { FAQ } from "./components/FAQ"

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  function handleScroll() {
    console.log('scroll!')
  }

  return (
    <body className={styles.main}>
      <div className={styles.container}>
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
      </div>
    </body>
  );
}
