import React from 'react'
import {Search, Heart, ShoppingCart} from 'lucide-react'
import './navigate.css'
const Navigate = () => {
  return (
    <div className='navigate-bar'>

        <h1>Warm Hearth</h1>

        <nav>
            <a href="#hero">Home</a>
            <a href="#projects-grid">Menu</a>
        </nav>

        <div className='icons'>
           <button>  <Search /></button>
            <button>  <Heart /> </button> 
            <button> <ShoppingCart /> </button> 
        </div>
    </div>
  )
}

export default Navigate