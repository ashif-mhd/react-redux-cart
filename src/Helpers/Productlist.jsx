import React from 'react'
import '../styles/productlist.css'
import { useNavigate } from 'react-router-dom'

export const Productlist = (props) => {
    const { id, productName, Price, productImage,stock } = props.data
    const navigate =useNavigate();
    return (
        <div className='main' role='button' onClick={()=>navigate(`/productt/${id}`)}>
            <img src={productImage} alt="" />
            <div className='productitems' >
                <h1>{productName}</h1>
                <h4>&#8377;{Price}</h4>
                {stock  >0 ?<button className='button-cart'>ADD To Cart</button> 
                : <button className='button-stock'>Out Of stock</button>}
            </div>

           
        </div>
    )
}
