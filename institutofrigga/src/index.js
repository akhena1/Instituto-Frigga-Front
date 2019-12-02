import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from '../src/pages/Home/Home';
import Produto from '../src/pages/Produto/Produto';
import Receita from '../src/pages/Receita/Receita';
import VerReceita from '../src/pages/VerReceita/VerReceita'; 
import Perfil from '../src/pages/Perfil/Perfil';
import Entrar from '../src/pages/Entrar/Entrar';
import About from '../src/pages/About/About';
import NotFound from '../src/pages/NotFound/NotFound'
// Redirect
import {Route, HashRouter as Router, Switch, } from 'react-router-dom';
import './assets/css/estilo.css';
import { usuarioAutenticado, parseJwt } from '../src/services/auth';

/* const PermissaoAdmin = ({ component : Component }) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Administrador" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname : "/Entrar"}}/>
            )
        }
    />
)

const PermissaoFornecedor = ({ component : Component }) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Fornecedor" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname : "/Entrar"}}/>
            )
        }
    />
)

const PermissaoCliente = ({ component : Component }) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Cliente" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname : "/Entrar"}}/>
            )
        }
    />
) */
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
                
                <Route path = "/produtos" component={Produto}/>
                <Route path = "/produto" component={Produto}/>

                <Route path = "/receitas" component={Receita}/>
                <Route path = "/receita" component={Receita}/>
                
               {/*  <Route path = "/receita/" component={VerReceita}/>
                <Route path = "/receitas/" component={VerReceita}/> */}

                <Route path = "/perfil" component={Perfil}/>

                <Route path = "/entrar" component={Entrar}/>

                <Route path = "/about" component={About}/>

                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
) 
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
