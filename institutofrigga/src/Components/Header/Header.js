import React, { Component } from 'react';
import MenuSanduiche from '../../assets/img/menu-button-of-three-horizontal-lines.png';
import LogoWeb from '../../assets/img/definitivo-fundo-preto.png';
import LogoMob from '../../assets/img/definitivo-fundo-preto.png';
import {Link, withRouter} from 'react-router-dom';
import { usuarioAutenticado } from '../../services/auth';

class Header extends Component {
    
    logout = () => {
        localStorage.removeItem("usuario-frigga")
        this.props.history.push("/entrar")
    }
    render() {
        return (
            
            <header>
             {/* <div className="logo">
                <input type="checkbox" id="bt_menu"/>
                <label for="bt_menu">&#9776;</label>
                     <button className="botao-menu" type="menu" id="bt_menu"><img src={MenuSanduiche}
                        alt="Ícone de Menu" />
                        <p>MENU</p>
                    </button> 
                    <img className="logorodapeweb" src={LogoWeb} alt=" Logo  do instituto" />
                    <img className="logohmob" src={LogoMob} alt="logo do instituto" />
                </div>
                <nav>
                    {usuarioAutenticado() ? (
                        //  <div className="navbar-container">
                         <div className="navbar">
                             <ul className="menu">
                                 <Link to ="/">Home</Link>
                                 <Link to ="/produtos">Produtos</Link>
                                 <Link to ="/receitas">Receitas</Link>
                                 <Link to ="/about">Quem Somos</Link>
                             </ul>
                             <div className="menu2">
                                <Link to ="/perfil">Perfil</Link>
                                <Link style={{
                                    backgroundColor: 'white',
                                    color: 'black' }} onClick={this.logout} to ="/entrar">SAIR</Link>
                             </div>
                         </div>
                    //  </div>
                    ):(
                        // <div className="navbar-container">
                        <div className="navbar">
                            <ul className="menu">
                                <Link to ="/">Home</Link>
                                <Link to ="/produtos">Produtos</Link>
                                <Link to ="/receitas">Receitas</Link>
                                <Link to ="/about">Quem Somos</Link>
                            </ul>
                            <div className="menu2">
                            <Link to ="/entrar">Perfil</Link>
                            <Link to ="/entrar">Entrar</Link>
                            </div>
                        </div>
                    // </div>
                    )

                    }
                </nav>  */}



                
<div class="menu_global">
            <input type="checkbox" id="btt_menu"/>
            <label for="btt_menu">&#9776;</label>  
            

            <nav class="menuzao_ttl">
                <ul>
                    <Link to ="/">Home</Link>
                    <Link to ="/produtos">Produtos</Link>
                    <Link to ="/receitas">Receitas</Link>
                    <Link to ="/about">Quem Somos</Link>
                </ul>
                <ul class="menuzao_2">
                    <Link to ="/entrar">Perfil</Link>
                    <Link to ="/entrar">Entrar</Link>
                </ul>
            </nav>
            </div>


            <div class="logotipo_fri">
                <img className="logotiporodapeweb" src={LogoWeb} alt=" Logo  do instituto" />
                <Link to ="/entrar">Perfil</Link>
            </div>

                

        </header>
            
        );
    }
}
export default withRouter(Header);
