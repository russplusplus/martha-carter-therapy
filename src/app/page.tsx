import Link from "next/link";

import { api } from "~/trpc/server";
import styles from "../styles/styles.css";
import { Header } from "./components/Header"

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  function handleScroll() {
    console.log('scroll!')
  }

  return (
    <body className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={'flex-h-center margin-t-l cream'}>
          <h1>
            Therapy for adults in Colorado who are ready to transform their anxiety and trauma into personal growth and resilience
          </h1>
        </div>
        <div className='flex-h-center margin-t-l cream'>
          <hr/>
        </div>
        <div className='flex-h-center margin-t-l cream'>
          <h2>
            Book a free consultation
          </h2>
        </div>
        <div className={'flex-h-center margin-t-l cream'}>
          <h1>
            "Martha is an insightful, warm, compassionate therapist with wisdom and wit that invites vulnerability. I highly recomment her as a clinician and have loved working with her in several different settings." - Mikyla Young-Bayless, LMFT
          </h1>
        </div>
        <div className='flex-h-center margin-t-l headshot-card'>
          <img id='headshot' src='headshot.jpg'></img>
          <p className='paragraph' onScroll={handleScroll}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        
      </div>
    </body>
  );
}
