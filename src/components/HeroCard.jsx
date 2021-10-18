import React from 'react'

const HeroCard = (props) => {
  return (
    <div className="card-hero">
        <div className="card-hero-content">
            <h2 className="card-hero-title">{props.name}</h2>
            <p className="card-hero-text">{props.text}</p>
            <a rel="noreferrer" target="_blank" href={props.link} className="card-hero-link">Learn More</a>
        </div>
        <img src={props.img} alt="" className="card-hero-img" />
    </div>
  )
}

export default HeroCard
