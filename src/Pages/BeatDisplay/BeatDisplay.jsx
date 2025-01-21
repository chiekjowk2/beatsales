import "./BeatDisplay.css"
import { useContext } from "react"
import { appContext } from "../../App.jsx"
const BeatDisplay = ({beat}) => {
  const {addCart , addBeat } = useContext(appContext)
  let addProduct = () => {
    addBeat(beat)
    addCart()
  }
  return (
    <div className='beat-display'>
      <div className="beat-info">
        <img src={beat.image} alt="" />
        <h2>{beat.name}</h2>
        <h4>{beat.producer}</h4>
      </div>
      <div className="left-2">
        <div className="play">
          <audio src={beat.audio}  controls type="audio/mp3"></audio>
        </div>
        <p>{beat.price}</p>
        <button className="add" onClick={ addProduct}>Add to cart</button>
      </div>
    </div>
  )
}
export default BeatDisplay