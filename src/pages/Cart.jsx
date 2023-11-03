import React from 'react'
import { useSelector } from 'react-redux'
import { ProductListItems } from '../Helpers/ProductListItems'

export const Cart = () => {
  const list = useSelector((state)=>state.cart.list)
  return (
    <div>

     {list.map((item)=><ProductListItems {...item} key={item.id}/>)}
      </div>
  )
}
