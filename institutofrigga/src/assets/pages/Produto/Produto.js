import React, {Component} from 'react';
import I1 from '../../img/pepino.png';
import I2 from '../../img/p1.jpg';
import I3 from '../../img/p3.png';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


class Produto extends Component {
    render(){
        return (
            <div>
                <Header/>
                <main>

        <section className="container_geral">

            <section className="container-categorias">
                <h2>CATEGORIAS</h2>
                <div className="bar_bar"></div>
                <div className="categorias">
                    <div className="align">
                        <p>LEGUMES</p><br></br>
                        <div className="categ_1">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="align">
                        <p>FRUTAS</p><br></br>
                        <div className="categ_2">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="align">
                        <p>SAFRA DA SEMANA</p><br></br>
                        <div className="categ_3">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="align">
                        <p>MAIS BUSCADOS</p><br></br>
                        <div className="categ_4">
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container_mobile">
                <div className="categorias_mobile">
                    <div className="categ_mobile">
                        <p>LEGUMES</p>
                        <a href="#"><img src="IMGS/frutas.png" title="#" alt="legumes"/></a>
                    </div>
                    <div className="categ_mobile">

                        <p>FRUTAS</p>
                        <a href="#"><img src="IMGS/abacaxi.png" title="#" alt="frutas"/></a>

                    </div>
                </div>
            </section>


            <section className="container-produtos container-produtos-isa">
                    <h3 className="isa-produtos">Produtos</h3>
                <div className="card_produtoisa">
                    <img src={I1} alt="imagem de pepino"/>
                    <div className="nav-p nav-p-isa">
                        <p>Pepino<br></br> R$ 10,25</p>
                        
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div>
                <div className="card_produtoisa">
                    <img src={I2} alt="imagem de tomates"/>
                    <div className="nav-p nav-p-isa">
                        <p>tomates<br></br> R$ 9,99</p>
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div>
                <div className="card_produtoisa">
                    <img src={I3} alt="imagem de uma alface"/>
                    <div className="nav-p nav-p-isa">
                        <p>Alface<br></br> R$ 3,99</p>
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div>
                <div className="card_produtoisa">
                    <img src={I3} alt="imagem de alface"/>
                    <div className="nav-p nav-p-isa">
                        <p>Alface<br></br> R$ 3,99</p>
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div>

                <div className="card_produtoisa">
                    <img src={I1} alt="imagem de pepino"/>
                    <div className="nav-p nav-p-isa">
                        <p> Pepino<br></br> R$ 10,25 </p>
                        <a href="login.html" title="login">Encomendar</a>
                    </div>

                </div>

                <div className="card_produtoisa">
                    <img src={I2} alt="imagem de tomates"/>
                    <div className="nav-p nav-p-isa">
                        <p>tomates<br></br> R$ 9,99</p>
                        <input type="number" name="qtd" value="1"/>
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div>
            </section>


        </section>


    </main>
            <Footer/>
            </div>
            
        );
    }
}
export default Produto;
