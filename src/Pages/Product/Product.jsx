import "./Product.css"
import { useContext, useEffect, useState} from "react"
import { appContext } from "../../App.jsx"
import { useLocation, useNavigate } from "react-router-dom"
import BeatDisplay from "../BeatDisplay/BeatDisplay.jsx"
import { IoArrowBackSharp } from "react-icons/io5";

const Product = () => {
    const {Data} = useContext(appContext)
    const location = useLocation()
    const [beat, setBeat] = useState({});
    const [beatId, setBeatId] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
      const temp_id = location.pathname.split("/")
      const id = temp_id[temp_id.length - 1]
      setBeatId(id)
    },[location])

    useEffect(() => {
      if (beatId) {
        const beat = Data.filter((data, key) => {
          return data.id == beatId
        })
        setBeat(beat[0])
      }
    }, [beatId])

  return (
    <div className="product">
        <IoArrowBackSharp style={{fontSize: "35px"}} onClick={() => navigate(-1)} className="back-icon"/>
        <BeatDisplay beat={beat}/>
    </div>
  )
}

export default Product
