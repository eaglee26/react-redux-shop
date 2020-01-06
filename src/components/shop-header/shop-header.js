import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, CART } from '../../services/routes';
import './shop-header.css'

const ShopHeader = ({ nubItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to={HOME} className='logo text-dark'>ReShop</Link>
            <Link to={CART} className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart' />
                {nubItems} items (${total})
            </Link>
        </header>
    )
};

export default ShopHeader;