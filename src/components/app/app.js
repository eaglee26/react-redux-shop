import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
import './app.css'

const App = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/card' component={CardPage} />
        </Switch>
    )
};

export default App;