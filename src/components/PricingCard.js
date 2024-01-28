import { Link } from "react-router-dom";
import "./PricingCardStyle.css";

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="container-1">
            <div className="card-1">
            <div className="f-card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 50</p>
                <p>- 5 Days - </p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btnn">PURCHASE NOW</Link>
            </div>
            <div className="s-card"></div>
            <div className="t-card"></div>
            </div>
           </div>
           <div className="container-2">
            <div className="card-2">
            <div className="ff-card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 7 Days - </p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btnn">PURCHASE NOW</Link>
                <div className="ss-card"></div>
            <div className="tt-card"></div>
            </div>
           </div>
            </div>
            <div className="container-3">
            <div className="card-3">
            <div className="fff-card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 150</p>
                <p>- 10 Days - </p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btnn">PURCHASE NOW</Link>
                <div className="sss-card"></div>
            <div className="ttt-card"></div>
            </div>
            </div>
            </div>
           
          
    </div>
  )
}

export default PricingCard