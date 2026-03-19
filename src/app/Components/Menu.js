'use client'

import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import Logo from "./Logo"

export default function Menu() {

    const menuRef = useRef(null)
    const textRef = useRef(null)
    const extendMenuRef = useRef(null)
    const [shouldClose, setShouldClose] = useState(true);
    const [menuText, setMenuText] = useState('Menu ');
    const openMenu = () => {
        gsap.to(menuRef.current, {
            duration: 0.25,
            width: 86,
            height: '100vh',
            x: -3,
            autoRound: false,
            borderRadius: 0,
            ease: "circ.out",
            force3D: true
        })

    }

    const closeMenu = () => {
        shouldClose === true && gsap.to(menuRef.current, {
            duration: 0.45,
            width: 64,
            height: '97vh',
            autoRound: false,
            borderRadius: 0,
            x: 0,
            ease: "power3.inOut",
            force3D: true
        })
    }


    const toggleMenu = () => {
        let tl;
        if (tl) tl.kill();
        setShouldClose(false);
        tl = gsap.timeline();
        if (menuText == 'Menu ') {
            tl.set(extendMenuRef.current, { display: 'flex' })
            tl.from('g', {
                duration: 1.5,
                autoRound: false,
                force3D: true,
                y: '500%',
                opacity: 0,
                stagger: 0.1,
                ease: 'circ.out'
            }, 'sync')
            tl.fromTo(extendMenuRef.current, {
                autoRound: false,
                width: 0,
                height: '100vh',
            }, {
                width: '30vw',
                height: '100vh',
                duration: 1,
                autoRound: false,
                ease: 'expo',
            }, 'sync')
            tl.to('.text-animate', {
                x: 100,
                autoRound: false,
                duration: 0.2,
            }, 'sync')

            setTimeout(() => {
                setMenuText('Close')
            }, 250)
            tl.fromTo('.text-animate', {
                delay: 0.3,
                x: 100,
                duration: 0.35,
                autoRound: false,
            }, {
                x: 0,
            })

        }
        else {
            setMenuText('Menu ')
            tl.from('.text-animate', {
                x: 100,
                duration: 0.35,
                autoRound: false,
            }, 'sync')
            tl.to(extendMenuRef.current, {
                autoRound: false,
                width: '0px',
                height: '97vh',
                duration: 1,
                padding: 0,
                force3D: true,
                ease: 'expo',
            }, 'sync')
            setShouldClose(true);
            closeMenu();
            setTimeout(() => {
                gsap.set(extendMenuRef.current, { display: 'none' })
            }, 1000)

        }
    }



    return (
        <>
            <div className="h-screen w-24 justify-center items-center relative flex flex-row flex-wrap">
                <div ref={menuRef} className={'will-change-transform h-[97vh] w-16 my-auto mx-auto flex flex-row'} style={{willChange: 'width, height'}}>
                    <div
                        onMouseEnter={openMenu}
                        onMouseLeave={closeMenu}
                        onClick={toggleMenu}
                        className={'w-full h-full bg-black cursor-pointer flex flex-row flex-wrap'}
                    >
                        <div className={'h-screen w-full z-20'}>
                            <div ref={textRef} className='antialiased will-change-transform absolute duration-100 top-0 left-1/2 -translate-x-1/2 text-white rotate-270 text-lg bricolage-grotesque font-semibold translate-y-[50px]'>
                                <div className='overflow-hidden flex flex-row flex-nowrap '>
                                    {menuText.split('').map((char, i) => {
                                        return <p className='text-animate' key={i}>{char}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div ref={extendMenuRef} className={'ps-22 h-screen w-[30vw] absolute hidden top-0 left-0 bg-black'} style={{willChange: 'width, height'}}>
                            <div className='w-full h-full relative'>
                                <Logo className=' absolute top-0 translate-y-[3vh] w-full h-full duration-500 flex justify-center ' size={64} color='#fff' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}