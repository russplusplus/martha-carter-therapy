"use client"

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export function FadeIn(
    { children }
    :
    { children: React.ReactNode }
) {
    return (
        <ScrollAnimation animateIn="fadeIn">
            { children }
        </ScrollAnimation>
    )
}