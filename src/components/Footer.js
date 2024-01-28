import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone,FaInstagram,FaGithub } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff",
                marginRight:"2rem",marginTop:"0.9rem"}}/>
                <p>Kottayam,Kerala.</p>
                <p>India</p>

                </div>
            
            <div className="phone">
              <h4><FaPhone size={20} style={{ color:"#fff",
                marginRight:"2rem"}}/>+91-8138979312</h4>
            </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color:"#fff",
                marginRight:"2rem"}}/>
                alanachankunju555@gmail.com</h4>
                </div>
                </div>
            <div className="right">
            <h4>About the the company</h4>
            <p>
            Welcome to maniactech, your trusted partner in software development.
             We specialize in crafting cutting-edge solutions that propel businesses into the future.
             <h4>Our Mission:</h4>
              At maniactech, our mission is to revolutionize industries through bespoke software solutions.
              We thrive on challenges and are committed to delivering products that exceed expectations.
            </p>
                <div className="social">
                <a class='social-link instagram'
                 href="https://www.instagram.com/a.l_x_n?igsh=NGVhN2U2NjQ0Yg=="
                 target=""
                 aria-label="Instagram"
                 >
                 <FaInstagram size={30} style={{ color:"#fff",
                marginRight:"1rem"}}/>
                </a>
                <a class='social-link github'
                 href="https://github.com/alan8278"
                 target=""
                 aria-label="Github"
                 >
                <FaGithub size={30} style={{ color:"#fff",
                marginRight:"1rem"}}/>
                </a>
                <a class='social-link linkedin'
                 href="https://www.linkedin.com/in/alan-achankunju-33a697226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target=""
                 aria-label="Linkedin"
                 >
                <FaLinkedin size={30} style={{ color:"#fff",
                marginRight:"1rem"}}/>
                  </a>
                
                <a class='social-link facebook'
                 href="https://www.facebook.com/profile.php?id=100012092345514&mibextid=ZbWKwL"
                 target=""
                 aria-label="Facebook"
                 >
                <FaFacebook  size={30} style={{ color:"#fff",
                marginRight:"1rem"}}  
                />
                </a>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer