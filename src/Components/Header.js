import React from 'react'
import { } from '@mui/material'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
const Header = () => {
    return (
        <header>
            <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2' />
            <div className='inputBox'>
                <SearchRounded className='searchIcon' />
                <input type='text' placeholder='Search' />
            </div>
            <div className='shoppingCart'>
                <ShoppingCartRounded className='cart' />
                <div className='cart_content'>
                    <p>2</p>
                </div>
            </div>
            <div className='profileContainer'>
                <div className='imageBox'>
                    <img className='profilePic' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b' />
                </div>
                <h2 className='userName'>Vetrivel Ravi</h2>
            </div>
            <div className='toggleMenu'>
                <BarChart className='toggleIcon' />
            </div>
        </header>
    )
}

export default Header;
