import { HeroClientContainer } from "./HeroClientContainer"
import { CallToAction } from "./CallToAction"
import Image from "next/image"

export function Hero() {
  return (
    <HeroClientContainer>
      <div id="hero-container">
        <div id="hero-caption-container" className="cream">
          <h1 id="hero-line-1">
            Online somatic trauma therapy
          </h1>
          <br/>
          <h1 id="hero-line-2">
            for adults across Colorado
          </h1>
          <br/>
          <svg className="squiggle" overflow="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="100 170 600 100"><path d="M112.5560531616211,235.8744354248047C146.708517964681,229.6801161702474,235.74887227376303,201.35126831054689,295.51568603515625,202.69058227539062C355.2824997965495,204.02989624023436,361.7518579101562,243.71898864746095,432.73541259765625,243.04933166503906C503.7189672851563,242.37967468261718,630.4155232747396,207.30642435709635,675.7847290039062,199.10313415527344" fill="none" strokeWidth="7" stroke="url(&quot;#SvgjsLinearGradient1001&quot;)" strokeLinecap="round" strokeDasharray="0 0" transform="matrix(0.9950062499999999,5.551115123125783e-17,-5.551115123125783e-17,0.9950062499999999,7.79798592076304,-19.976401093149178)"></path><defs><linearGradient id="SvgjsLinearGradient1001" gradientTransform="rotate(188, 0.5, 0.5)"><stop stopColor="#d4f9cd" offset="0"></stop><stop stopColor="#fcf4e8" offset="1"></stop></linearGradient></defs></svg>
          <CallToAction className="hover-sage active-sage"/>
        </div>
        <div id="hero-img-container">
          <Image 
            id='hero' 
            src='/hero.png' 
            alt='Martha Carter Somatic Therapist Denver hero' 
            height='640' 
            width='401'
            style={{
              width: "auto"
            }}
          ></Image>
        </div>
        <div style={{width: "100%", overflow: "hidden"}}>
          <svg className="blobs" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" opacity="1">
            <defs>
              <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="59" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse rx="157" ry="277.5" cx="404.78091814131017" cy="394.4817508078371" fill="#d4f9cdff"></ellipse>
            </g>
          </svg>
        </div>
      </div>
    </HeroClientContainer>
  )
}