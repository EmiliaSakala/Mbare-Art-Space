import React from 'react';
import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo">MbareArtSpace</a>
                  <div className="itemContainer"> 
                    <span>+263 288 8373</span>
                  </div>
                  <div className="itemContainer"> 
                    <span>artspace@gmail.com</span>
                  </div>
              </div>

              <div className="right">
                 <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                     <span className="line1"></span>
                     <span className="line2"></span>
                     <span className="line3"></span>
                 </div>
              </div>
          </div>
            
        </div>
    )
}
