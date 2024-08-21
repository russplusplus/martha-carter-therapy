"use client"

import FadeIn from 'react-fade-in';

export function MotifClientContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div id="hero-row-container" className="flex-h-center prevent-select bg-lavender ">
      <FadeIn delay={700} transitionDuration={1000}>
        { children }
      </FadeIn>
    </div>
  )
}