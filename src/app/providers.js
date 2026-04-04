'use client';

import gsap from "gsap";
import { TransitionRouter } from "next-transition-router";
export function Providers({ children }) {
    return (
        <>
            <TransitionRouter
                leave={(next) => {
                    const tween = gsap.fromTo('.pagetransition', {
                        y: '-100%',
                    }, {
                        y: 0,
                        stagger: 0.2,
                        duration: 1,
                        ease: 'expo.inOut',
                        onComplete: next,
                    })
                    return () => tween.kill();
                }}
                enter={(next) => {
                    const tween = gsap.fromTo('.pagetransition', {
                        y: '0',
                    }, {
                        y: '100%',
                        stagger: '-0.2',
                        duration: 1,
                        ease: 'expo.inOut',
                        onComplete: next,
                    })
                    gsap.set('.pagetransition', { y: '-100%' })
                    return () => tween.kill();
                }}
            >

                {children}
            </TransitionRouter>
        </>
    );
}