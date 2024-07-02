"use client"

import FadeIn from 'react-fade-in';

export function MotifClientContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex-h-center margin-t-l cream">
      <FadeIn delay={700} transitionDuration={1000}>
        { children }
      </FadeIn>
    </div>
  )
}