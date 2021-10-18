import React from 'react'
import Seat from './Seat'
import Screen from './Screen'
const SelectSeats = () => {
  return (
   
  <div className="select-seats">
    <Screen />
    <div className="seat-row">
      <Seat />
      <Seat sold />
      <Seat />
      <Seat sold />
      <Seat />
      <Seat />
      <Seat sold />
      <Seat />
    </div>
    <div className="seat-row">
      <Seat />
      <Seat />
      <Seat />
      <Seat  />
      <Seat sold/>
      <Seat />
      <Seat  />
      <Seat sold/>
    </div>
    <div className="seat-row">
      <Seat sold/>
      <Seat sold />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <Seat sold />
      <Seat />
    </div>
    <div className="seat-row">
      <Seat />
      <Seat />
      <Seat />
      <Seat sold/>
      <Seat />
      <Seat />
      <Seat />
      <Seat />
    </div>
    <div className="seat-row">
      <Seat sold/>
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <Seat sold/>
      <Seat />
      <Seat />
    </div>
    <div className="seat-row">
      <Seat />
      <Seat sold />
      <Seat />
      <Seat sold />
      <Seat />
      <Seat />
      <Seat sold />
      <Seat />
    </div>
    <div className="seat-row">
      <Seat />
      <Seat />
      <Seat sold/>
      <Seat sold />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
    </div>
    <button className="select-confirm">Confirm</button>
   </div>

  )
}

export default SelectSeats
