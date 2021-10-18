import React from 'react'

const Date = (props) => {
  return (
    <div className = "tickets-date-info">
      <div className="tickets-date">{props.date}</div>
      <div className="tickets-day">{props.day.toUpperCase()}</div>
    </div>
  )
}

export default Date
