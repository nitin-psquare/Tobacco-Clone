import "./MIddle.css"
import Card from "./Card"
const MIddle = () => {
  return (
    <div className="middle-main">
        <div className="middle-main-header">
            <div className="middle-main-heading">
                <span className="italics">
                On stage at {" "}
                </span>
                
                <span className="middle-main-font">
                    TOBACCO

                </span>

            </div>
            <div className="middle-main-button">
                    AGENDA
            </div>
        </div>

        <div className="middle-main-cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>






    </div>
  )
}

export default MIddle