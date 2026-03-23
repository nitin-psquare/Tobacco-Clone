import React from 'react'
import cardimage from "../../assets/cardimage.png"

import "./Middle2.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Middle2 = () => {

  gsap.registerPlugin(ScrollTrigger) ;
  useGSAP(() =>{

    const items = gsap.utils.toArray<HTMLElement>(".item") ;

    

    items.forEach(item => {
      const tl = gsap.timeline() ;

      const random = gsap.utils.random(-1, 1) ;

      tl.set(item, {
        transformOrigin: `${random < 0 ? "left" : "right" }`
      })


      tl.to(item, {
        scale:0,
        scrollTrigger: {
          trigger: item,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }, "collective") ;

      tl.to(item, {
        xPercent: `${random * 100}`,
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }, "collective") ;




    })



  })



  return (
    <div className='middle2-main'>
      <div className="images-grid-container">
        <div className='item' style={{"--r": 1, "--c": 2} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 1, "--c": 5} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 2, "--c": 3} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 2, "--c": 1} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 3, "--c": 7} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 4, "--c": 4} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 5, "--c": 3} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 5, "--c": 1} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 6, "--c": 5} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 6, "--c": 2} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        <div className='item' style={{"--r": 9, "--c": 7} as React.CSSProperties }>
          <img src={cardimage} alt="" /></div>
        

      </div>





        <div className="middle2-heading">
        An Impressive gem in the heart of AMSTERDAM.Industrial, fresh, innovative and the love for the DETAIL and HISTORY oozes from the walls. 
        </div>
    </div>
  )
}

export default Middle2