import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import '../styles/navbar.css'


export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="leftside">
                <Link to="/"><h1>HOME</h1></Link>
                <p>THE SHOPPERS STOP </p>
            </div>
            
            <div className="rightside">
                <div style={{width:550}}>
                </div>
                <Link to="/cart"> <h1> <ShoppingCart size={52} /></h1> </Link>
                
            </div>
        </div>

    )
}
