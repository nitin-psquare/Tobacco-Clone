import type { Dispatch, MouseEvent } from "react";
import "./RoomList.css"
import gsap from "gsap";
const RoomList = ({sethoveredRoom, img} : {sethoveredRoom: Dispatch<React.SetStateAction<{previous: string | null; current:string | null}>>, img: string} ) => {
  return (
    <div className="v-r-room"

    onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {

        const parent = e.currentTarget.getBoundingClientRect() ;
        const overlay = e.currentTarget.querySelector(".overlay") ;
        const fromTop = (e.clientY - parent.top < parent.height/ 2) ;
        // gsap.set(overlay, {
        //         y: "0%" 
        // })
        // gsap.to(overlay, {
        //         y: fromTop ? "-100%": "100%" 
        // })
        gsap.fromTo(overlay, {
         y: gsap.getProperty(overlay, "y") ,
        }, {
                y: fromTop ? "-100%": "100%" 
        })
    }}



    onMouseEnter={(e:MouseEvent<HTMLDivElement>) => {
        sethoveredRoom((prev)=>({
                previous: prev?.current ?? null,
                current: img
        }))
        const parent = e.currentTarget.getBoundingClientRect() ;
         const overlay = e.currentTarget.querySelector(".overlay") ;

        const fromTop = (e.clientY - parent.top < parent.height/ 2) ;

        // gsap.set(overlay, {
        //         y: fromTop ? "-100%" : "100%"
        // });

        // gsap.to(overlay, {
        //         y: "0%", 
        //         duration: 0.8, 
        //         ease:"power1"
        // })


        gsap.fromTo(overlay, {
         y: gsap.getProperty(overlay, "y") ,
        }, {
                y: "0%", 
                duration: 0.8, 
                ease: "power1" 
        })



    }}
    
    >
        
        <div className="roomname">
                Lorem, ipsum.
        </div>
        <div className="room-capacity">
                max 300 people
        </div>
        <div className="room-area">
                400m2
        </div>

        <div className="overlay">

        </div>








    </div>
  )
}

export default RoomList