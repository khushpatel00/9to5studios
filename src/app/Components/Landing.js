'use client'
import gsap from "gsap";
import Logo from "./Logo";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing() {


    useEffect(() => {
        const locomotive = new LocomotiveScroll();
        gsap.registerPlugin(ScrollTrigger)
        
        gsap.from('g', {
            duration: 1.5,
            autoRound: false,
            force3D: true,
            y: '500%',
            opacity: 0,
            stagger: 0.1,
            ease: 'circ.out'
        })
        gsap.to('#landing #scroller', {
            transform: 'translateX(-100%)',
            scrollTrigger: {
                trigger: '#landing',
                scroller: 'body',
                // markers: true,
                start: 'top 0%',
                end: 'top -100%',
                scrub: 1,
                pin: true,
            }
        })
        return (
            locomotive.destroy()
        )
    }, [])

    return (
        <section id="landing" className='w-screen h-[300vh] '>
            <div id='scroller' className='w-full m-0 mt-[1.5vh] h-[97vh] ps-32 flex flex-row flex-nowrap'>
                <div className='w-72 h-auto aspect-square me-15'>
                    <Logo size={72} className='' />
                </div>
                <img src="/landing_1_banner.webp" className='h-full w-full ' />
                <img src="/landing_2.webp" className='h-full w-full ' />
            </div>
        </section>
    )
} 