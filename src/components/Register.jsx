import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import { BASE_URL } from "../backend";

function Register() {
  const [userData, setData] = useState({
      firstName:"",
      lastName:"",
      email: "",
      password: ""
  })
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
    
    axios.post(BASE_URL+'register',userData)
    .then(()=> {
      window.location = "/signin";
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  return (
      <div>
    <Header />
    <main class="form-signin" >
    <form style={{lineHeight: '5rem'}}>
        <h1 class="h3 mb-3 fw-normal" style={{textAlign: 'center',fontSize:"2.3rem"}}>Register</h1>
        <label for="firstName" class="visually-hidden">firstName</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="name" id="firstName" class="form-control" placeholder="First Name" required="" />
        <label for="lastName" class="visually-hidden">lastName</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="name" id="lastName" class="form-control" placeholder="Last Name" required="" />
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1.8rem 0', padding:"0.6rem"}} type="email" id="email" class="form-control" placeholder="Email Address" required="" autofocus="" />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="password" id="password" class="form-control" placeholder="Password" required=""  />
        
        <button onClick={submitHandler} style={{backgroundColor: '#f5ba13',color:"white",fontSize:"1.2rem"}} class="w-100 btn btn-sm" type="submit">Register</button>
    </form>
    </main>
    <Footer />
    </div>
  );
}

export default Register;
