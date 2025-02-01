import './Signin.css'
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Signin = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    axios.post('http://localhost:8000/signin', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === 'Login Successful') {
          navigate("/");
        } 
        else{
          alert(result.data.message)
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("Error signing in. Please try again.");
      });
  };

  return (
    <div className='signin'>
        <div className="wrapper-1">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input">
                  <label> Email<input type="text" name='email'required onChange={(e) => setEmail(e.target.value)} /></label>
                  <label> Password<input type="text" name='password' required onChange={(e) => setPassword(e.target.value)} /></label>
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <p>Don't have an account?<Link to="/signup"> SignUp</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signin
