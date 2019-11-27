import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './assets/pages/Home'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './assets/css/estilo.css'

 const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
            </Switch>
        </div>
    </Router>
) 

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
