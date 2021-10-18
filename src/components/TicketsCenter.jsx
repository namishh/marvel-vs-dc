import React from 'react'
import Tickets from "./Tickets"
const TicketsCenter = () => {

  return (
    <div className="tickets-ticket-center">
      <Tickets name="PVR Gurgaon" time={['09:00 HIN 3D', '13:00 END 2D', '15:00 ENG 3D']} avail={['#1aeb1a', 'red', 'red']}/>
      <Tickets name="Wave Cinema Mall" time={['10:00 ENG 2D', '13:00 HIN 2D', '19:00 ENG 2D']} avail={['#1aeb1a', 'red', '#fcba03']}/>
      <Tickets name="PVR EDM" time={['08:00 HIN 2D', '11:00 ENG 2D', '15:00 HIN 3D']} avail={['#1aeb1a', 'red', '#fcba03']}/>
      <Tickets name="Wave Cinema Mall" time={['10:00 ENG 2D', '13:00 HIN 2D', '19:00 ENG 2D']} avail={['#1aeb1a', 'red', '#fcba03']}/>
      <Tickets name="PVR DLF Mall" time={['10:00 ENG 3D', '13:00 HIN 2D', '19:00 ENG 2D']} avail={['#1aeb1a', '#1aeb1a', '#1aeb1a']}/>
    </div>
  )
}

export default TicketsCenter
