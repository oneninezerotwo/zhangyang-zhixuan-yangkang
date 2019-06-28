import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

import PersonalCenter from './Router/PersonalCenter/PersonalCenter';
import Register from './Router/Register/Register';
import Login from './Router/Login/Login';
import SetPasw from './Router/SetPasw/SetPasw';
import { Provider } from 'react-redux'
import store from './stores/store'


ReactDOM.render(<Provider store={store}>
    <Router>
        <Route exact path='/' component={PersonalCenter} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/sp' component={SetPasw} />
    </Router>
</Provider>, document.getElementById('root'));


