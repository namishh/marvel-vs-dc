import React from 'react'
import Date from "./Date"
const OptionsBar = () => {
  const handleDates = (e) => {
    if(!e.target.classList.contains("tickets-date-section")) {
      const elements = document.querySelector(".tickets-date-section").children
      for (let i = 0; i < elements.length; i++) { 
        // console.log(elements[i]); 
        elements[i].classList.remove("tickets-date-active")
      } 

      if(e.target.classList.contains("tickets-day") || e.target.classList.contains("tickets-date") ) {
        let parent = e.target.parentElement
        parent.classList.add("tickets-date-active")
      }
      else {
        e.target.classList.add("tickets-date-active")
      }
    }
  }
  return (
    <div className="tickets-options">
      <div className="tickets-date-section" onClick = {handleDates}>
        <Date date="18" day="mon"/>
        <Date date="19" day="tue"/>
        <Date date="20" day="wed"/>
      </div>
      <div className="tickets-location-center">
        <i className="ph-map-pin"></i>
        <h1 className="tickets-location-name">Delhi, NCR</h1>
      </div>
    </div>
  )
}

export default OptionsBar
