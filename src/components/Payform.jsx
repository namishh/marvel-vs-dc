import React from 'react'
import { useHistory } from "react-router-dom";

const Payform = ({cost}) => {
  const history = useHistory();
  return (
    <div className="payment">
      <h1 className="payment-form-heading"> Confirm your payment of {cost}/-.</h1>
      <form onSubmit={() => {alert("Success!");history.push("/");}} action="#" className="payment-form">
        <div className="payment-form-input-box">
          <span className="payment-form-label">card number</span>
          <input type="number" className="payment-form-input" maxLength="16"/>
        </div>
        <div className="payment-form-input-box">
          <span className="payment-form-label">card holder</span>
          <input type="text" className="payment-form-input" />
        </div>
        <div className="payment-form-flex-box">
          <div className="payment-form-input-box">
            <span className="payment-form-label">month</span>
            <select className="payment-form-input"> 
              <option value="">Month</option>
              <option value="">01</option>
              <option value="">02</option>
              <option value="">03</option>
              <option value="">04</option>
              <option value="">05</option>
              <option value="">06</option>
              <option value="">07</option>
              <option value="">08</option>
              <option value="">09</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>
          </div>

          <div className="payment-form-input-box">
            <span className="payment-form-label">year</span>
            <select className="payment-form-input"> 
              <option value="">Year</option>
              <option value="">2021</option>
              <option value="">2022</option>
              <option value="">2024</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
              <option value="">2028</option>
              <option value="">2029</option>
            </select>
          </div>
          <div className="payment-form-input-box">
          <span className="payment-form-label">cvv</span>
          <input type="number" className="payment-form-input" maxLength="4"/>
          </div>
        </div>
        <button type="submit" className="payment-form-submit">Proceed To Pay</button>
      </form>
    </div>
  )
}

export default Payform
