import type { Dispatch } from "react";
import "./RoomList.css"
const RoomList = ({sethoveredRoom, img} : {sethoveredRoom: Dispatch<React.SetStateAction<{previous: string | null; current:string | null}>>, img: string} ) => {
  return (
    <div className="v-r-room"
        
    onMouseEnter={() => {
        sethoveredRoom((prev)=>({
                previous: prev?.current ?? null,
                current: img
        }))
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








    </div>
  )
}

export default RoomList