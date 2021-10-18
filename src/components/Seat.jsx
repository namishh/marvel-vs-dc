import React from 'react'

const Seat = ({sold}) => {
  return (
    <div className={`seat ${sold ? "seat-sold" : ''} `}></div>
  )
}

export default Seat
