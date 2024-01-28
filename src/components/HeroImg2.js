import "./HeroImg2Styles.css";

import React, { Component } from 'react';

import projectimg from "../assets/hero-img2.jpg"

class HeroImg2 extends Component {
  render() {
    return (
      <div className="Hero-img">
          <div className="heading">
            <img className="project-img" src={projectimg} alt="project"/>
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
  
          </div>
      </div>
    );
  }
  
  }
  
export default HeroImg2;