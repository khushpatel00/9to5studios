'use client'
import gsap from "gsap";
import Logo from "./Logo";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Landing() {

    const locomotive = new LocomotiveScroll();

    useEffect(() => {

        gsap.from('g', {
            duration: 1.5,
            autoRound: false,
            force3D: true,
            y: '500%',
            opacity: 0,
            stagger: 0.1,
            ease: 'circ.out'
        })
    }, [])

    return (
        <section className='w-screen my-auto h-[97vh] ps-16 flex flex-row flex-nowrap'>
            <div className='w-72 h-auto aspect-square me-15'>
                <Logo size={72} className='' />
            </div>
            <img src="/landing_1_banner.webp" className='h-full w-full ' />
            <img src="/landing_2.webp" className='h-full w-full ' />
        </section>
    )
} 