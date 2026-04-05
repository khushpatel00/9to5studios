'use client'

import gsap from "gsap";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing() {

    useEffect(() => {

        let tween, locomotive;
        import("locomotive-scroll").then((locomotiveModule) => {
            locomotive = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
                direction: 'horizontal',
            });
        });

        // const locomotive = new LocomotiveScroll({
        //     el: document.querySelector('[data-scroll-container]'),
        //     smooth: true,
        //     direction: "horizontal",
        //     lerp: 0.05
        // });
        gsap.registerPlugin(ScrollTrigger)

        tween = gsap.fromTo('#landing g', {
            y: '500%',
        }, {
            duration: 1.5,
            autoRound: false,
            force3D: true,
            // opacity: 1,
            stagger: 0.05,
            ease: 'expo.out',
            y: 0,
        })
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth'
        });
        let scroller = gsap.to('#landing #scroller', {
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
        let imageScroller = gsap.to('.image-scroller', {
            transform: 'translateX(5vw)',
            autoRound: false, 
            scrollTrigger: {
                triiger: '.image-scroller-container',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -100%',
                scrub: 1,
            }
        })
        return () => {
            // locomotive.destroy();
            if (tween) tween.kill();
            if (scroller) scroller.kill();
            if (imageScroller) imageScroller.kill();
            if (locomotive) locomotive.destroy();
        }

    }, [])



    return (
        <section id="landing" className='w-screen' style={{ height: `100vw` }} data-scroll data-horizontal="true" data-scroll-container>
            <div id='scroller' data-scroll data-horizontal="true" className='w-full m-0 mt-[0.75vh] h-[97vh] ps-32 flex flex-row flex-nowrap'>
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
                <div className='w-fit h-[97vh] my-auto flex flex-col flex-wrap gap-10 image-scroller-container'>
                    <div className='h-full w-auto overflow-hidden image-scroller-parent'>
                        <img src="/landing_1_banner.webp" className='h-full image-scroller object-cover' />
                    </div>
                    <div className='h-full w-auto overflow-hidden image-scroller-parent'>
                        <img src="/landing_2.webp" className='h-full image-scroller w-auto object-right' />
                    </div>
                </div>
            </div>
        </section>
    )
} 