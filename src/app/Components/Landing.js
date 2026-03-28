'use client'
import gsap from "gsap";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing() {

    useEffect(() => {
        const locomotive = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            direction: "horizontal",
            lerp: 0.05
        });
        gsap.registerPlugin(ScrollTrigger)

        gsap.from('#landing g', {
            duration: 1.5,
            autoRound: false,
            force3D: true,
            y: '500%',
            opacity: 0,
            stagger: 0.05,
            ease: 'expo.out'
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
        // return (
        //     locomotive.destroy()
        // )
    }, [])
    // const [width, setWidth] = useState(0);
    // if (typeof window !== "undefined") {
    //     useEffect(() => {
    //         setWidth(window.innerWidth);
    //         console.log(width);
    //     }, [window.innerWidth]);
    // }



    return (
        <section id="landing" className='w-screen' style={{ height: `${window?.innerWidth}px` }}>
            <div id='scroller' className='w-full m-0 mt-[0.75vh] h-[97vh] ps-32 flex flex-row flex-nowrap'>
                <div className='w-72 h-full flex flex-col flex-nowrap justify-between  aspect-square me-15'>
                    <Logo size={72} className='' />
                    <p className='pb-[1.5vh] text-sm antialiased'>
                        Se dovessimo definirci banalmente diremmo
                        che siamo uno studio di architettura e
                        progettazione specializzato in BIM. Ma
                        vogliamo fare di meglio, per cui: siamo giovani,
                        polemici, creativi, testardi, a giorni alterni
                        risoluti e per lo più ambiziosi. E insieme
                        facciamo progettazione BIM. Insieme siamo
                        9to5.
                    </p>
                </div>
                <div data-scroll data-horizontal="true" data-scroll-container className='w-fit h-[97vh] my-auto flex flex-col flex-wrap'>
                    <img data-scroll-section data-scroll-speed='0.5' src="/landing_1_banner.webp" className='h-full w-auto' />
                    <img data-scroll-section data-scroll-speed='0.5' src="/landing_2.webp" className='h-full w-auto' />
                </div>
            </div>
        </section>
    )
} 