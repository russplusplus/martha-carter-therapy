
import { FadeInOnScroll } from "./FadeInOnScroll"

export function SocialProof1({
    children
}:{
    children: React.ReactNode[]
}) {
  return (
    <div className="bg-cream social-proof">
      <FadeInOnScroll>
        <div className="flex-h-center padding-t-s padding-b-l green bg-cream prevent-select ">
          <h1>
            &quot;Martha is an insightful, warm, compassionate therapist with wisdom and wit that 
            invites vulnerability. I highly recomment her as a clinician and have loved working 
            with her in several different settings.&quot;<br/><br/> - Mikyla Young-Bayless, LMFT
          </h1>
        </div>
      </FadeInOnScroll>
    </div>
  )
}

