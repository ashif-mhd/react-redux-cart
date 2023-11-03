import React from 'react'
import '../styles/cart.css'

export const ProductListItems = (props) => {
    const { productName, Price, productImage} = props

  return (
    <div>
        <div className='mainn'>
            <img src={productImage} alt="" />
            <div className='productitem' >
                <h1>{productName}</h1>
                <h4>&#8377;{Price}</h4>
                 <button className='button-dment'>-</button>
                Quantity
                 <button className='button-iment'  >+</button> <br />
                 <button className='button-remove'>Remove</button>
            </div>

           
        </div>
    </div>
  )
}
