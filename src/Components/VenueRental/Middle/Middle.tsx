import React, { useEffect, useState } from 'react'
import "./Middle.css"
import RoomList from './RoomList'
import img from "../../../assets/img10.jpg"
import img1 from "../../../assets/img1.jpg";

import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.jpg";
import img11 from "../../../assets/img11.jpg";
import Cursorpreview from './Cursorpreview'
const MIddle = () => {

    const [hoveredRoom, sethoveredRoom] = useState<{ previous: string | null; current: string | null }>({
        previous: null, 
        current: null
    });
    const [position, setposition] = useState<{
        x: number,
        y: number
    }>({x: 0, y : 0});


    useEffect(() => {

        const handlecursorposition = (e : MouseEvent) => {
            // console.log(e) ;
            setposition({
                x: e.clientX, 
                y: e.clientY
            });
            // console.log(position) ;
        }

        window.addEventListener("mousemove", handlecursorposition) ;

        return () => { window.removeEventListener("mousemove", handlecursorposition) } ;
    }, [])

    // useEffect(() => {
    // console.log("UPDATED:", position);
    // }, [position]) ;







    return (
        <div className='venue-rental-middle'>
            <Cursorpreview 
            hoveredRoom = {hoveredRoom}
            position = {position}
            />
            <div className="v-r-roomsinfo">
                <div className="v-r-roominfo-heading">
                    Our&nbsp;
                    <span className='bebas'>
                        ROOMS
                    </span>
                </div>

                <div className="v-r-roomslist"
                    onMouseLeave={() => {
                        sethoveredRoom({
                            previous: null, current: null
                        })
                    }}
                >
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img1}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img2}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img4}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img3}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img11}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img10}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img9}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img8}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img7}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img6}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img5}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img4}/>
                    <RoomList sethoveredRoom = {sethoveredRoom} img = {img3}/>
                </div>


            </div>




        </div>
    )
}

export default MIddle