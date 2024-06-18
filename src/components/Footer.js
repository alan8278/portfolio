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
            <h4>About Me</h4>
            <p>
            I'm Alan Achankunju, a Computer Science Engineering student based in India,
             currently studying at the College of Engineering Cherthala. Passionate about software development,
              I specialize in creating efficient and user-friendly web applications. With expertise in JavaScript,
               React, and Node.js, I thrive on solving complex challenges to enhance user experiences. Beyond coding,
                I'm enthusiastic about exploring emerging technologies and continuously expanding my skill set.
                 Let's connect and explore opportunities to innovate together!
             <h4> Mission:</h4>
             My mission is to innovate through software development, creating user-centric solutions that drive positive impact. 
             I focus on mastering JavaScript, React, and Node.js to build efficient web applications that enhance user experiences
              and push technological boundaries.
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