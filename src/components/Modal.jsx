import { motion } from 'framer-motion'
import React from 'react'
import Backdrop from './Backdrop'
export const Modal = ({handleClose, children}) => {


  const dropin = {
    hidden : {
      y : "-100vh",
      opacity : 0
    },
    visible : {
      y : "0",
      opacity : 1,
      transition : {
        type : "spring",
        duration : 0.6,
        damping : 100,
        stiffness : 500
      }
    },
    exit : {
      y : "-100vh",
      opacity : 0,
      transition : {
        type : "spring",
        duration : 0.6,
        damping : 100,
        stiffness : 500
      }
    }
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div className="modal" initial="hidden" animate="visible" exit="exit" variants={dropin} onClick={(e) => e.stopPropagation()}>
        {children}
      </motion.div>

    </Backdrop>
  )
}

export default Modal
