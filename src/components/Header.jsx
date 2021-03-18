import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Keeper</h1>
      <button id="logout" onClick={props.logoutFunc} style={{position: 'absolute',right:"1.2rem",top:"1.8rem",fontSize:"1.3rem",padding:"0.25rem 0.25rem 0.25rem 0.25rem"}}>{props.logOut}</button>
    </header>
  );
}

export default Header;
