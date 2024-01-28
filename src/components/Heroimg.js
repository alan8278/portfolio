import "./HeroimgStyles.css";

import React from 'react'
import Introimg from "../assets/intro-img2.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="Hero">
        <div className="Mask">
            <img className="Intro" src={Introimg} 
              alt="Intro" />
        </div>
        <div className="content">
            <p className="main-heading-secondary"> HI,I'M ALAN ACHANKUNJU.</p>
            <h1 className="main-heading-primary">FRONT-END DEVELOPER</h1>
        
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
    
  
  );
};

export default Heroimg