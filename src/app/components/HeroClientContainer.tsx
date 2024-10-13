"use client"

export function HeroClientContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div id="hero-row-container" className="flex-h-center prevent-select bg-lavender">
      { children }
    </div>
  )
}