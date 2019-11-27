import React, { Component } from 'react';
import MenuSanduiche from '../../img/menu-button-of-three-horizontal-lines.png';
import LogoWeb from '../../img/definitivo-fundo-preto.png';

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
                    <a href="perfil.html">Perfil</a>
                </div>
                <nav>
                    <div className="navbar-container">
                        <div className="navbar">
                            <ul className="menu">
                                <li><a href="index.html" className="ativo" title="Instituto Frigga-Home">Home</a></li>
                                <li><a href="produtos.html" title="Instituto Frigga-Produtos">Produtos</a></li>
                                <li><a href="receitas.html" title="Instituto Frigga-Receitas">Receitas</a></li>
                                <li><a href="about.html" title="Instituto Frigga-Quem somos">Quem somos?</a></li>
                            </ul>
                            <div className="menu2">
                                <a href="perfil.html" title="botão acessar perfil de usuário">Perfil</a>
                                <a href="login.html" title="Botão entrar">Entrar</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;