import React from 'react';
import { withBookStoreService } from '../HOC'
import './app.css'

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <div>App</div>
    )
};

export default withBookStoreService()(App);