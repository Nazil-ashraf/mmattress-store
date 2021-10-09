// /api/users
import {useState} from "react";
import axios from "axios";
import './registration.scss'

function Registration(detail) {

    const URl =" api/users"
    const[user,setUser]=useState({})

    function readFirstName(event){
         setUser({...user,firstName:event.target.value})
    }

    function readLastName(event){
         setUser({...user,lastname:event.target.value})
    }

    function readUserName(event){
        setUser({...user,username:event.target.value})
    }

    function readPassword(event){
        setUser({...user,password:event.target.value})
    }

    function readConfirmPassword(event){
        setUser({...user,confirmpassword:event.target.value})
    }

    function readAddress(event){
        setUser({...user,address:event.target.value})
    }

    function readLandmark(event){
        setUser({...user,landmark:event.target.value})
    }
    function readLocation(event){
        setUser({...user,location:event.target.value})
    }
    function readCity(event){
        setUser({...user,city:event.target.value})
    }

    function readPincode(event){
        setUser({...user,pincord:event.target.value})
    }
     function readEmailid(event){
         setUser({...user,emailid:event.target.value})
     }
     function readContact(event){
         setUser({...user,contact:event.target.value})
     }

     function handleSubmit(event){
        event.preventDefault()
         axios.post(URl,user)
             .then(function (res){
                 setUser(res.data)
                 console.log(res.data)
             })



     }

     function eventValid(detail){

         const password = detail.password

         const confirmpassword = detail.confirmpassword

         if(password === confirmpassword){
             console.log("valid")
         }else {
             console.log("Invalid")
         }


     }





    return(
       <form>
          <div className="registration">

            <div className="registration--container">

                    <label>First Name</label>
                    <input type="first name" onChange={readFirstName}/>


                     <label>Last Name</label>
                     <input  type="last name" onChange={readLastName}/>


                   <label>Username</label>
                   <input type="username" onChange={readUserName}/>


                    <label>Password</label>
                     <input type="password" onChange={readPassword}/>


                    <label>Confirm Password</label>
                    <input type="password" onChange={readConfirmPassword}/>


                    <label>Address</label>
                    <input type="address" onChange={readAddress}/>

                <label>Landmark</label>
                       <input type="landmark" onChange={readLandmark}/>


                       <label>Location</label>
                       <input type="location" onChange={readLocation}/>


                       <label>City</label>
                       <input type="city" onChange={readCity}/>


                       <label>Pincode</label>
                       <input onChange={readPincode}/>
                  <label>Email-id</label>
                  <input type="email-id" onChange={readEmailid}/>


                  <label>Contact</label>
                  <input type="contact" onChange={readContact}/>




            </div>
              <div>
                 <div>{detail.firstName}{detail.lastname}</div>
                  <div>{eventValid}</div>

              </div>
              <div className="registration--button">
                  <button onClick={handleSubmit}>Submit</button>
              </div>

          </div>

       </form>

    )
}


export default Registration