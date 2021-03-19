import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {useHistory} from "react-router-dom"
import { BASE_URL } from "../backend";

function Signin(props){
    const [fail,setfail]=useState("")
    const [userData, setData] = useState({
        email: "",
        password: ""
    })
    const history = useHistory()
    const handleChange= (event) => {
      const {id,value} = event.target
      setData(prevData =>{
        return {
        ...prevData,
        [id]:value}
      });
    }
    const submitHandler = (event) => {
      event.preventDefault();
      
      axios.post(BASE_URL+'signin',userData)
      .then((res)=> {
        if(res.data==="invalid password"){
          setfail("Email or Password does not match our records")
        }else{
          localStorage.setItem('token',res.data);
          history.push("/notes");
        }
        
      })
      .catch((error)=> {
        console.log(error)
      });
    } 
    return(
        <div>
        <Header />
        <main class="form-signin" >
    <form style={{lineHeight: '5rem'}}>
        <h1 class="h3 mb-3 fw-normal" style={{textAlign: 'center',fontSize:"2.3rem"}}>Sign In</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1.8rem 0', padding:"0.6rem"}} type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="" />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="password" id="password" class="form-control" placeholder="Password" required="" />
        <p style={{color: 'red'}}>{fail}</p>
        <button onClick={submitHandler} style={{backgroundColor: '#f5ba13',color:"white",fontSize:"1.2rem"}} class="w-100 btn btn-sm" type="submit">Sign in</button>
    </form>
    </main>
    <Footer />
    </div>
);
}

export default Signin