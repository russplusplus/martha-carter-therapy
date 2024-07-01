import { Lavender } from "./Lavender"
import { MotifClientContainer } from "./MotifClientContainer"
import { CallToAction } from "./CallToAction"

export function Motif() {
  return (
    <MotifClientContainer>
      <h1 id="motif-line-1">
        Therapy for <Lavender>adults</Lavender> in <Lavender>Colorado</Lavender>
      </h1>
      <br/>
      <h1 id="motif-line-2">
        ready to transform their <Lavender>anxiety</Lavender> and <Lavender>trauma</Lavender>
      </h1>
      <br/>
      <h1 id="motif-line-3">
        into <Lavender>personal growth</Lavender> and <Lavender>resilience.</Lavender>
      </h1>
      <br/>

      {/* <CallToAction/> */}

    </MotifClientContainer>
  )
}