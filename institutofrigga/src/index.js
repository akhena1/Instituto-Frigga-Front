import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './assets/pages/Home/Home';
import Produto from './assets/pages/Produto/Produto';
import Receita from './assets/pages/Receita/Receita';
import VerReceita from './assets/pages/VerReceita/VerReceita'; 
import Perfil from './assets/pages/Perfil/Perfil';
import Entrar from './assets/pages/Entrar/Entrar';
import About from './assets/pages/About/About';
import NotFound from '../src/assets/pages/NotFound/NotFound'
// Redirect
import {Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import './assets/css/estilo.css';

 const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
                
                <Route path = "/produtos" component={Produto}/>
                <Route path = "/produto" component={Produto}/>

                <Route path = "/receitas" component={Receita}/>
                <Route path = "/receita" component={Receita}/>
                
                {/* <Route path = "/receita/" component={VerReceita}/>
                <Route path = "/receitas/" component={VerReceita}/> */}

                <Route path = "/perfil" component={Perfil}/>

                <Route path = "/entrar" component={Entrar}/>

                <Route path = "/about" component={About}/>

                {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
    </Router>
) 

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
