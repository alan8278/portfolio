import "./WorkingCardStyle.css";
import WorkingCard from "./WorkingCard";
import workCardData from "./workCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {workCardData.map((val,ind) =>{
            return(
              <WorkingCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            )
           })} 

        </div>
       

    </div>
  )
}

export default Work
