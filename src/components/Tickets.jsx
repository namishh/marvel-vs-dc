import React from 'react'
import Time from "./Time"
export const Tickets = (props) => {

  return (
    <div className="ticket">
      <div className="ticket-info">
        <div className="ticket-movie-name">{props.name}</div>
      </div>
      <div className="ticket-timings">
        {props.time.map((value, index) => {
        return <Time unq={`${new Date().getMilliseconds}${Math.floor(Math.random(3456))}`} time={value} color={props.avail[index]}/>
      })}
      </div>
    </div>
  )
}


export default Tickets