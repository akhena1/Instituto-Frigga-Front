import React, { Component } from 'react';
import r1 from '../../img/r1.jpg';
import r2 from '../../img/r2.jpg';
import r3 from '../../img/r3.jpg';
import p1 from '../../img/tm.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import p4 from '../../img/p4.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Home extends Component {
    render() {
        return (
            <body>
                <Header/>
                <main>
                
                    <div className="banner">
                        <p className="bannerTitle">
                            Precisa de uma renda extra?
            </p>
                        <p className="banner-txt">Que tal começar a vender marmitas<br />
                            feitas com produtos orgânicos? Você<br />
                            ganha uma grana extra e ainda coopera <br />
                            para um   mundo   mais   sustentável!</p>
                        <a href="about.html">
                            Saiba mais!
            </a>
                    </div>
                    <div className="titulos">
                        <h2>Receitas recentes</h2>
                        <h1>Produtos recentes</h1>
                    </div>
                    <div className="container">
                        <section className="receitas">
                            <a href="#" className="card-receita">
                                <img src={r1} alt="Imagem de um prato de comida" />
                                <p className="position">Salada de Legumes<br /> Gourmet
                    </p>
                            </a>
                            <a href="#" className="card-receita">
                                <img src={r2} alt="Imagem de um prato de salada" />
                                <p className="position">Refogado de frango<br /> com cenoura</p>
                            </a>
                            <a href="#" className="card-receita">
                                <img src={r3} alt="Prato de comida" />
                                <p className="position">Salada de repolho<br /> com beterraba e abobora</p>
                            </a>
                            <div className="btn-seemore"><a href="receitas.html"> Ver mais</a></div>
                        </section>
                        <section className="container-produtos">
                            <div className="card-produto">
                                <img src={p1} alt="imagem de tomates" />
                                <div className="nav-p">
                                    <p>Tomates italianos<br /> R$ 12,49</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div className="card-produto">
                                <img src={p2} alt="imagem de beterrabas" />
                                <div className="nav-p">
                                    <p>Beterrabas<br /> R$ 9,99</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div className="card-produto">
                                <img src={p3} alt="imagem de um alface" />
                                <div className="nav-p">
                                    <p>Alface crespa<br /> R$ 3,99</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div className="card-produto">
                                <img src={p4} alt="imagem de cenouras" />
                                <div className="nav-p">
                                    <p>Cenouras<br /> R$ 11,19</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div className="btn-seemore"><a href="produtos.html" className="btn-seemore">Ver mais..</a></div>
                        </section>
                    </div>
                </main>
                <Footer/>
            </body>
        );
    }
}
export default Home;










