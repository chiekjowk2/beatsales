import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import { createContext , useState , useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Data } from "./Data.jsx"
import { Toaster , toast } from "sonner"

export const appContext = createContext(null)
const prod = JSON.parse(localStorage.getItem("beat")) 

const App = () => {
    const [hide, setHide] = useState(false)
    const [addedBeat , setAddedBeat] = useState( prod ? prod : [])
    
    const handleHide = () => {
        hide ? setHide(false) : setHide(true)
    }
    
    const addBeat = (newBeat) => {
        
        if(addedBeat.length === 0){
            toast.success("Beat added to cart")
            setAddedBeat([...addedBeat , newBeat])
        } else {
            const exist = addedBeat.find(item => item.id === newBeat.id)

            if (exist){
                toast.error("Beat already in cart")
                return
            } else{
                toast.success("Beat added to cart")
                setAddedBeat([...addedBeat , newBeat])
            }
        }
    }
    const removedBeat = (id) => {
        toast.success("Beat removed from cart")
        setAddedBeat(addedBeat.filter(item => item.id !== id)) 
        }

    const clearCart = () => {
        if (addedBeat.length === 0){
            toast.error("Cart is already empty")
            return
        }
        else{
            setAddedBeat([])
            toast.success("Cart cleared")
        }
    }

    useEffect(() => {
        localStorage.setItem("beat" , JSON.stringify(addedBeat))
    }, [addedBeat])

  return (
    <appContext.Provider value={{handleHide, hide,Data , addBeat ,addedBeat, removedBeat , clearCart}} >
        <div className='app'>
            <Toaster richColors="true" position="top-right" closeButton = "true" offset={26} /> 
                <Navbar />
            <div className="outlets">
                <Outlet/>
            </div>
        </div>
    </appContext.Provider>
  )
}
export default App