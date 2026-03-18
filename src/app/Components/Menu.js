'use client'

import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Menu() {

    const menuRef = useRef(null)
    const textRef = useRef(null)
    const openMenu = () => {
        gsap.to(menuRef.current, {
            duration: 0.3,
            scaleX: 1.518,
            scaleY: 1.031,
            x: 4.7,
            borderRadius: 0,
            ease: "circ.out",
            force3D: true
        })
        gsap.to(textRef.current, {
            ease: "circ.out",
            force3D: true,
            duration: 0.3,
            scaleY: 0.7,
            scaleX: 1,
        })

    }

    const closeMenu = () => {
        gsap.to(menuRef.current, {
            duration: 0.45,
            scaleX: 1,
            scaleY: 1,
            borderRadius: 0,
            x: 0,
            ease: "power3.inOut",
            force3D: true
        })
        gsap.to(textRef.current, {
            duration: 0.45,
            ease: "power3.inOut",
            force3D: true,
            scaleX: 1,
            scaleY: 1,
        })
    }

    return (
        <div className="h-screen w-22 justify-center relative items-center flex flex-col flex-wrap">
            <div ref={menuRef} onMouseEnter={openMenu} onMouseLeave={closeMenu} className={'will-change-transform h-[97vh] w-16 my-auto mx-auto'}>
                <div className={'w-full h-full bg-black cursor-pointer'}>
                    <p ref={textRef} className='antialiased will-change-transform absolute top-0 left-1/2 -translate-x-1/2 text-white rotate-270 translate-y-[200%]'>Menu</p>
                </div>
            </div>
        </div>

    )
}