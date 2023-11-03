import React from 'react'
import { products } from '../Helpers/Products'
import { Productlist } from '../Helpers/Productlist'
import '../styles/productlist.css'

export const Shop = () => {
  return (
    <div className='shop'>
     <div className="shoptitle">
     </div>
     <div className="products">
    {products.map(product=> (<Productlist data={product} key={product.id}/>))}
     </div>
    </div>
  )
}
