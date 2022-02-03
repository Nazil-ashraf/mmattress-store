import {useEffect, useState} from "react";
import './login.scss'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Header from "../home/header";


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
        <div className={"login"}>
            <Header/>
        <div className="login--page">

            <div className="login--page--header">Sign in to your account</div>
            <input placeholder="Enter Username"  className="login--page--input" onChange={loginUser}/>
            <input type="password" placeholder="Enter password" className="login--page--password" onChange={loginPassword}/>

            <button  className="login--page--button" onClick={handleLogin}>Sign in</button>
            <div className={"login--page--account"}>Don't have an account?</div>
            <Link to={"/register"}>
            <button className={"login--page--create-button"}>Create account</button>
            </Link>



        </div>
        </div>
    )
}


export default Login