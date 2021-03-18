import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
      <div>
    <Header /> 
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"   >

  
    <main class="px-4" style={{margin:"8rem",textAlign:"center",lineHeight:"4.5rem"}} >
      <h1>Wanna keep your notes safe?</h1>
      <p class="lead">Then go ahead, register yourself and start making notes.</p>
      <a href="/Register"><button style={{backgroundColor: '#f5ba13',color:"white",fontSize:"1.8rem",borderRadius:"20px",margin:"0 3rem 0 0"}} class="w-25 btn btn-sm" type="submit">Register</button></a>
      <a href="/Signin"><button style={{backgroundColor: '#f5ba13',color:"white",fontSize:"1.8rem",borderRadius:"20px"}} class="w-25 btn btn-sm" type="submit">Sign in</button></a>
    </main>
    
    </div>
    <Footer />
  </div>
     );
}

export default Home;

