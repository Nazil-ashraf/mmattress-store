import {useEffect, useState} from "react";
import './login.scss'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


function Login() {

     const [user,setUser]=useState({})
    const history = useHistory()

    function loginUser(event){
        setUser({...user,username:event.target.value})
    }
     function loginPassword(event){
         setUser({...user,password:event.target.value})
     }

     function handleLogin(){

         axios.post("/api/login",user)
             .then(function (res){
                history.push("/")
             })
             .catch(function(error) {
                 history.push("/login/error")
             })
     }

    return(
        <div className="loginpage">
            <div className="loginpage--header">Login/Sign Up On Mattress</div>
            <div className="loginpage--content">
            <input placeholder="Enter Username"  className="loginpage--content--input" onChange={loginUser}/>
            <input type="password" placeholder="Enter password" className="loginpage--content--input" onChange={loginPassword}/>
            <button  className="loginpage--content--button" onClick={handleLogin}>LOGIN</button>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}


export default Login