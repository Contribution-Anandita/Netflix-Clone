import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

    const [showScroll,handleScroll]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>50)
            handleScroll(true);
            else
            handleScroll(false);
        })
        return () =>{ 
            window.removeEventListener('scroll')
        }
    },[])
  return (
    <div className={`navbar ${showScroll && "navbar_scroll_black"}`}>
      <img className="netflix-logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix-logo" />
      <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar"/>
    </div>
  );
}

export default Navbar;
