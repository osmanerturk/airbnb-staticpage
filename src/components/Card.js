import React from "react";
import img from "../image12.png"
import star from "../staricon.png"
function Card () {
    return(
        <div>
            <img src={img} alt="card" className="card-photo" />
            <img src={star} alt="card" className="card-star" />
            <section className="card-rating" >5.0</section>
            <section className="card-review">(6)</section>
            <h1 className="card-title">Life lessons with Katie Zaferes</h1>
            <p className="card-cost"> <span className="card-price">From $136</span>  / person</p>
        </div>
    )
}

export default Card