import "./WorkingCardStyle.css";

import React from 'react'
//import pro1 from "../assets/pj.jpg";
import { NavLink } from "react-router-dom";
//import pro2 from "../assets/pj1.png";

const WorkingCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="img"></img>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} 
                        className="btn">
                            View
                        </NavLink>
                        <NavLink to={props.source}
                        className="btn">
                            Source
                        </NavLink>

                    </div>

                </div>
            </div>
  )
}

export default WorkingCard
