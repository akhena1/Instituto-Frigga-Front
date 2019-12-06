import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './assets/css/estilo.css';
import './assets/css/modalProduto.css'
import './assets/css/entrar.css'
import * as serviceWorker from './serviceWorker';
import Home from '../src/pages/Home/Home';
import Produto from '../src/pages/Produto/Produto';
import Receita from '../src/pages/Receita/Receita';
import VerReceita from '../src/pages/VerReceita/VerReceita'; 
import Perfil from '../src/pages/Perfil/Perfil';
import Entrar from '../src/pages/Entrar/Entrar';
import About from '../src/pages/About/About';
import NotFound from '../src/pages/NotFound/NotFound';


import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../src/services/auth';

/* const PermissaoAdmin = ({ component : Component }) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Administrador" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname : "/entrar"}}/>
            )
        }
    />
)

const PermissaoProdutor = ({ component : Component }) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Produtor" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname : "/entrar"}}/>
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
                <Redirect to={{ pathname : "/entrar"}}/>
            )
        }
    />
)  */
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
                
                <Route path = "/produtos" component={Produto}/>
                <Route path = "/produto" component={Produto}/>
                <Route path = "/receitas" component={Receita}/>
                <Route path = "/receita" component={Receita}/>
                <Route path = "/verreceita/" component={VerReceita}/>

                <Route path = "/verreceitas/" component={VerReceita}/>
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
