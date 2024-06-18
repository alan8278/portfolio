import { Link } from "react-router-dom"
import  "./AboutContentStyle.css"

import React from 'react'

import pro3 from "../assets/alan5.jpg"
import pro4 from "../assets/react-2.jpeg"
import pdf  from "../assets/alan.pdf"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I'm a React front-end developer.
         I create responsive secure websites for my clients</p>
         <Link to="/contact" ><button className="btn">Contact</button></Link>
         
            <a 
               href={pdf}
               download="alan.pdf" className="btn2"
            >
             RESUME
            </a>
            
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro3} className="img" alt="react"></img>

                </div>
                <div className="img-stack bottom">
                    <img src={pro4} className="img" alt="react"></img>

                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AboutContent