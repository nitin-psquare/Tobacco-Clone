import React from 'react'
import img1 from "../../assets/img1.jpg"

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";

import "./Middle2.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Middle2 = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {

    const items = gsap.utils.toArray<HTMLElement>(".item");



    items.forEach(item => {
      // const tl = gsap.timeline();

      const random = gsap.utils.random(-1, 1);

      const itemrect = item.getBoundingClientRect();
      const parent = item.parentElement?.getBoundingClientRect();
      let xoffset = 0;
      let yoffset = 0;
      if (parent != null) {
        xoffset =
          parent.width / 2 -
          (itemrect.left - parent.left + itemrect.width / 2);

        yoffset = parent.top - itemrect.top ;
          // parent.height / 2 -
          // (itemrect.top - parent.top + itemrect.height / 2);
        console.log({ xoffset });
        console.log({ yoffset });
      }
      let firstdone = false ;
      gsap.set(item, {
        transformOrigin: `${random < 0 ? "left" : "right"}`,
        x: xoffset,
        y: yoffset + 200,
        rotation: gsap.utils.random(-5, 5),
      })
      ScrollTrigger.refresh();

      gsap.to(item, {
        x: 0,
        y: 0,
        rotation: 0, 
        
        
        scrollTrigger: {
          trigger: ".images-grid-container",
          start: "top center",
          end: "top+=500 center",
          // scrub: true,
          // markers: true
          onLeave: () => {
            firstdone = true ;
            ScrollTrigger.refresh() ;
          }
        }
      })
      

      items.forEach(item => {
        gsap.to(item, {
        scale: 0,
  
        scrollTrigger: {
          trigger: item,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
          onRefresh: () => {
          if (!firstdone) return false;
      }
        },
      });
      })


      // tl.to(item, {
      //   scale: 0,

      //   scrollTrigger: {
      //     trigger: item,
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: true,
      //     // markers: true
      //   }
      // });




    })



  })



  return (
    <div className='middle2-main'>
      <span className='middle-2-tagline'>
        An&nbsp;
        <span className='bold-font'
        >
          IMPRESSIVE

        </span>
        &nbsp;gem in the heart of&nbsp;
        <span className='bold-font'>
          AMSTERDAM.
        </span>  &nbsp;industrial, fresh, innovative and the love for&nbsp;
        <span className='bold-font'>
          DETAIL
        </span>

        &nbsp;and&nbsp;
        <span className='bold-font'>
          HISTORY

        </span>
        &nbsp;oozes from the walls!


      </span>
      <div className="images-grid-container">
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 1, "--c": 1 } as React.CSSProperties}>
          <img src={img1} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 1, "--c": 4 } as React.CSSProperties}>
          <img src={img2} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 3, "--c": 3 } as React.CSSProperties}>
          <img src={img3} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 3, "--c": 1 } as React.CSSProperties}>
          <img src={img4} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 5, "--c": 3 } as React.CSSProperties}>
          <img src={img5} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 6, "--c": 2 } as React.CSSProperties}>
          <img src={img6} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 8, "--c": 1 } as React.CSSProperties}>
          <img src={img7} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 11, "--c": 4 } as React.CSSProperties}>
          <img src={img8} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 13, "--c": 1 } as React.CSSProperties}>
          <img src={img9} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 15, "--c": 3 } as React.CSSProperties}>
          <img src={img10} alt="" /></div>
        <div className='item' style={{ "--z": Math.floor(Math.random() * (7) + 0), "--r": 17, "--c": 2 } as React.CSSProperties}>
          <img src={img11} alt="" /></div>

      </div>





      {/* <div className="middle2-heading"> */}

      {/* </div> */}
    </div>
  )
}

export default Middle2