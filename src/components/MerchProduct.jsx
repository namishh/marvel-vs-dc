import React from 'react'

const MerchProduct = (props) => {
 
  return (
    <div class="merch-product">
      <div className="merch-imgbox">
        <img src={props.img} alt="merch" className="merch-img" />
      </div>
      <div className="merch-name-box">
        <p className="merch-name">{props.name}</p>
      </div>
      <div className="merch-endbox">
        <p className="merch-price">${props.price}</p>
        <a target="_blank" rel="noreferrer" href={props.link} className="merch-link">Buy Here</a>
      </div>
    </div>
  )
}

export default MerchProduct
