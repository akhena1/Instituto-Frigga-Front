import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import aimg from '../../img/q.jpg';
import aimg1 from '../../img/9.jpg';
import aimg2 from '../../img/negocio.jpg';
import aimg3 from '../../img/4.jpg';
import aimg4 from '../../img/66.jpg';
import aimg5 from '../../img/marmita.jpg';



class About extends Component {
    render() {
        return (
         
                <div>
                   <Header />
                    <section class="container-assunto1">
                        <div>
                            <img src={aimg} alt="Mulher segurando morango" />
                        </div>
                        <div>
                            <h1>Quem Somos</h1>
                            <p>Fala sobre a instituição no geral</p>
                        </div>
                    </section>


                    <section class="container-assunto1 container-assunto2">
                        <div>
                            <h2>Um pouco mais sobre o projeto social </h2>
                            <p>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                </p>
                        </div>
                        <div>
                            <img src={aimg1} alt="Laranjeira" />
                        </div>
                    </section>


                    <section class="container-assunto1">
                        <div>
                            <img src={aimg2} alt="homem segurando tablet" />
                        </div>
                        <div>
                            <h2>Nosso diferencial</h2>
                            <p>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                    <br></br>Texto explicando sobre projeto social feito com a ONG e <br></br>a ligação com os produtores como
                                                        parceiros diretos
                </p>
                        </div>

                    </section>

                    <section class="container-depoimento">
                        <div class="depoimento">
                            <img src={aimg3} alt="Pessoas que participaram do projeto" />
                            <h3>Depoimentos</h3>
                        </div>
                    </section>


                    <section class="container-galeria-texto">
                        <h3>Galeria</h3>
                        <div class="container-galeria">
                            <div class="esquerda-galeria"></div>

                            <div class="direita-galeria">
                                <img src={aimg4} alt="Mulher" />
                                <img src={aimg5} alt="Marmita" />
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
        );
    }
}
export default About;