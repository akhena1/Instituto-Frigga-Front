import React, { Component } from 'react';
import MenuSanduiche from '../../img/menu-button-of-three-horizontal-lines.png';
import LogoWeb from '../../img/definitivo-fundo-preto.png';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            
            <header>
                <div className="logo">
                    <button className="botao-menu" type="menu"><img src={MenuSanduiche}
                        alt="Ícone de Menu" />
                        <p>MENU</p>
                    </button>
                    <img className="logorodapeweb" src={LogoWeb} alt=" Logo  do instituto" />
                    <img className="logohmob" src="IMGS/definitivo-fundo-preto.png" alt="logo do instituto" />
                    <Link to ="/perfil">Perfil</Link>
                </div>
                <nav>
                    <div className="navbar-container">
                        <div className="navbar">
                            <ul className="menu">
                                <Link to ="/">Home</Link>
                                <Link to ="/produtos">Produtos</Link>
                                <Link to ="/receitas">Receitas</Link>
                                <Link to ="/about">Quem Somos</Link>
                            </ul>
                            <div className="menu2">
                            <Link to ="/perfil">Perfil</Link>
                            <Link to ="/entrar">Entrar</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
        );
    }
}
export default Header;
