import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <body>
                <main>

                    <div classsName="banner">
                        <p classsName="bannerTitle">
                            Precisa de uma renda extra?
            </p>
                        <p classsName="banner-txt">Que tal começar a vender marmitas<br />
                            feitas com produtos orgânicos? Você<br />
                            ganha uma grana extra e ainda coopera <br />
                            para um   mundo   mais   sustentável!</p>
                        <a href="about.html">
                            Saiba mais!
            </a>
                    </div>
                    <div classsName="titulos">
                        <h2>Receitas recentes</h2>
                        <h1>Produtos recentes</h1>
                    </div>
                    <div classsName="container">
                        <section classsName="receitas">
                            <a href="#" classsName="card-receita">
                                <img src="IMGS/r1.jpg" alt="Imagem de um prato de comida" />
                                <p classsName="position">Salada de Legumes<br /> Gourmet
                    </p>
                            </a>
                            <a href="#" classsName="card-receita">
                                <img src="IMGS/r2.jpg" alt="Imagem de um prato de salada" />
                                <p classsName="position">Refogado de frango<br /> com cenoura</p>
                            </a>
                            <a href="#" classsName="card-receita">
                                <img src="IMGS/r3.jpg" alt="Prato de comida" />
                                <p classsName="position">Salada de repolho<br /> com beterraba e abobora</p>
                            </a>
                            <div classsName="btn-seemore"><a href="receitas.html"> Ver mais</a></div>
                        </section>
                        <section classsName="container-produtos">
                            <div classsName="card-produto">
                                <img src="IMGS/tm.png" alt="imagem de tomates" />
                                <div classsName="nav-p">
                                    <p>Tomates italianos<br /> R$ 12,49</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div classsName="card-produto">
                                <img src="IMGS/p2.png" alt="imagem de beterrabas" />
                                <div classsName="nav-p">
                                    <p>Beterrabas<br /> R$ 9,99</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div classsName="card-produto">
                                <img src="IMGS/p3.png" alt="imagem de um alface" />
                                <div classsName="nav-p">
                                    <p>Alface crespa<br /> R$ 3,99</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div classsName="card-produto">
                                <img src="IMGS/p4.png" alt="imagem de cenouras" />
                                <div classsName="nav-p">
                                    <p>Cenouras<br /> R$ 11,19</p>
                                    <a href="login.html">Encomendar</a>
                                </div>
                            </div>
                            <div classsName="btn-seemore"><a href="produtos.html" classsName="btn-seemore">Ver mais..</a></div>
                        </section>
                    </div>
                </main>
            </body>
        );
    }
}
export default Home;










