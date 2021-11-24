import React from 'react';
import './intro.scss'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/intro.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    
                    <h1>Mbare Art Space</h1>
                    <p>Creating a space for<span>artists</span> to showcase their work</p>
                    <button>Empowering Communities</button>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow.gif" alt="" />
                </a>
            </div>

            <div className="logo">
                <img src="assets/logo1.png" alt="" />
                <img src="assets/logo2.png" alt="" />
                <img src="assets/logo3.png" alt="" />
            </div>
        </div>
    )
}
