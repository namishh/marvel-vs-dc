import React from 'react'
import {motion} from  'framer-motion';
const Time = (props) => {
  return (
    <div className="">
    <motion.div whileTap={{scale: 0.9}} whileHover={{scale : 1.2}} key={props.unq} style={{border : `1px solid ${props.color}`}} className="ticket-time">
      <p className="ticket-timings-value">{props.time}</p>
    </motion.div>
    </div>
    
  )
}

export default Time
