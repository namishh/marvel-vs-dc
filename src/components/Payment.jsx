import React from 'react'
import PayError from './PayError'
import Payform from './Payform'
const Payment = ({cost}) => {
  return (
    <div className="">
      {/*eslint-disable-next-line*/} 
      {cost == 0 ? <PayError text="You didnt Select Any Seats"/> : <Payform cost={cost}/>}
    </div>
  )
}

export default Payment
