import React, { useRef } from 'react'
import "./Cursorpreview.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cursorpreview = ({ hoveredRoom, position }: { hoveredRoom: { previous: string | null, current: string | null } | null, position: { x: number, y: number } }) => {
    const ref = useRef<HTMLDivElement>(null)
    const previousref = useRef<HTMLImageElement>(null)
    const currentRef = useRef<HTMLImageElement>(null) 
    useGSAP(() => {
        if (!ref.current) return;
        gsap.to(".cursor-preview", {
            x: position.x + 1,
            y: position.y - 260
        })
    }, [position])


    useGSAP(() => {
        if (!ref.current || !currentRef.current) return;


        
        const origin = Math.random() > 0.5
            ? "bottom left"
            : "bottom right";

        
        gsap.set(currentRef.current, {
            transformOrigin: origin,
        });
       
        gsap.fromTo(
            currentRef.current,
            { scale: 0 },
            {
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, [hoveredRoom?.current]);



    if (! hoveredRoom?.current) return;

    return (
        <div className='cursor-preview'
            ref={ref}
        >
            {
                hoveredRoom.previous && (
                    <img src={hoveredRoom.previous} alt=""
                        ref={previousref}
                        className='cursor-preview-image previous'
                    />

                )
            } {
                hoveredRoom.current && (<img src={hoveredRoom.current} alt=""
                        ref={currentRef}
                        className='cursor-preview-image current'
                    />)
            }






        </div>
    )
}

export default Cursorpreview