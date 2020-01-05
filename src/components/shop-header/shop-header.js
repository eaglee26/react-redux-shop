import React from 'react';
import './shop-header.css'

const ShopHeader = ({ nubItems, total}) => {
    return (
        <header className='shop-header row'>
            <a href='#' className='logo text-dark'>ReShop</a>
            <div className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart' />
                {nubItems} items (${total})
            </div>
        </header>
    )
};

export default ShopHeader;