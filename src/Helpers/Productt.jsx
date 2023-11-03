import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Products';
import '../styles/productt.css'
import { useDispatch } from 'react-redux';
import { additems } from '../redux/reducer/cart';

export const Productt = () => {
    const params = useParams();
    const item = products.find(e => e.id === parseInt(params.id))
    const dispatch = useDispatch();

    const addTocart = ()=>{
        dispatch(additems(item));
    }
    return (
        <div>
            <div className='mains'>
                <img src={item.productImage} alt="" />
                <div className='productitems' >
                <h1>{item.productName}</h1>
                <h4>&#8377;{item.Price}</h4>
                {item.stock > 0 ? 
                <>
                <button className='button-cart'>Buy Now</button> 
                <button className='button-cart'onClick={addTocart}> Add To Cart</button>
                </>
                : <button className='button-stock'>Out Of stock</button>}
            </div>
            </div>
            {item.dec}

        </div>
    )
}
