import Navbar from "../components/Navbar"
import OptionsBar from  "../components/OptionsBar"
import TicketsCenter from "../components/TicketsCenter"
import React, { useState } from 'react'
import {HashLoader} from 'react-spinners'
import {motion, AnimatePresence} from  'framer-motion';
import Modal from '../components/Modal'
import Payment from "../components/Payment";
import SelectSeats from "../components/SelectSeats";
const Tickets = () => {
  const [confirm, setconfirm] = useState(false)
  const [seat, setseat] = useState(0)
  const [modal, setmodal] = useState(false)
  const open = () => setmodal(true)
  const close = () => {
    setmodal(false)
    setseat(0)
    setconfirm(false)
  }
  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 3000);
  const handleClick = (e) => {
    const element = e.target
    // console.log(element, e.target);
    if(element.classList.contains("ticket-time") || element.classList.contains("ticket-timings-value")) {
      open()
    }
    if(element.classList.contains("payment-form-submit")) {
      console.log("A");
      close()
    }
  }

  const selectSeats = (e) => {
    if(e.target.classList.contains("select-confirm")) {
      const seats = document.querySelectorAll(".seat")
      const selected = Array.prototype.slice.call(seats).filter(s => s.classList.contains("seat-selected"))
      setseat(selected.length)
      setconfirm(true)

    }
    if (!e.target.classList.contains("seat") || e.target.classList.contains("seat-sold")) return
    e.target.classList.toggle("seat-selected")
    
  }
  const css = `
  position : absolute;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%)
`
  return (
    
    <div onClick={handleClick}>
      {load ? <HashLoader color="red" css={css} size={72}/> : <div><motion.div className="ticket-window">     
        <title>Book Your Tickets!</title> 
        <Navbar icon="red" background="red"/>
        <div className="tickets">
          <div className="tickets-movie-info">
          <h1 className="tickets-title">Book Your Tickets!</h1>
          </div>
          <OptionsBar/>
          <TicketsCenter />       
          </div>
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
          {modal && <Modal handleClose={close}> 
              <div onClick={selectSeats} className="">
              <button className="modal-btn" onClick={close}>
                  <i className="ph-x"></i>
                </button>
              {confirm ? <Payment cost={`${seat * 200}`} /> : <SelectSeats/> }

              
              </div>
          </Modal>}  
      </AnimatePresence> </div>}
      
    </div>
  )
}

export default Tickets
