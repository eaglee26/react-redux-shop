import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css'

const ShopHeader = ({ nubItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='#' className='logo text-dark'>ReShop</Link>
            <div className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart' />
                {nubItems} items (${total})
            </div>
        </header>
    )
};

export default ShopHeader;