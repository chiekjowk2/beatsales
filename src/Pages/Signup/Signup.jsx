import './Signup.css'
import {  Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(password.length < 6){
            alert("Password must be at least 6 characters long");
            return;
        }
        axios.post('http://localhost:10000/signup',{name,email,password})
        .then(response=> {console.log(response)
        navigate("/signin")
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='signup'>
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input">
                  <label> Name<input type="text" name='name' required onChange={(e) =>setName(e.target.value)}/></label>
                  <label> Email<input type="email" name='email' required onChange={(e) =>setEmail(e.target.value)}/></label>
                  <label> Password<input type="password" name='password'required onChange={(e) =>setPassword(e.target.value)}/></label>
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <p>Already have an account?<Link to="/"> Sign In</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup
