import "./Beats.css"
import { useContext } from "react"
import { appContext } from "../../App.jsx"
import { useNavigate } from "react-router-dom"
const Beats = () => {
    const { Data , addBeat} = useContext(appContext)
    const navigate = useNavigate()
  return (
    <div className='beats'>
      <h1>Beats</h1>
      <div className="each">
        {
          Data.map((item) => (
            <div className="each-item" key={item.id}>
              <img src={item.image} alt="" onClick={()=> navigate(`/beats/${item.id}`)}/>
              <h2>{item.name}</h2>
              <h4>{item.producer}</h4>
              <button className="add" onClick={()=> addBeat(item) }>${item.price}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Beats