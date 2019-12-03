import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
// import rimg from '../../img/receita2.jpg'
// import rimg1 from '../../img/receita4.jpg'
// import rimg2 from '../../img/receita5.jpg'
// import rimg3 from '../../img/receita7.jpg'
// import rimg4 from '../../img/receita2.jpg'
// import rimg5 from '../../img/receita4.jpg'
import api from '../../services/api';
//import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";







class Receita extends Component {

    constructor() {
        super();
        this.state = {
            listaCategoriaReceita: [],
            listarReceita: [],
        }
    }

    componentDidMount() {
        this.getCategoriaReceita();
        this.getReceita();
    }

    getCategoriaReceita = () => {
        api.get('/categoriareceita').then(response => {
            if (response.status === 200) {
                this.setState({ listarCategoriaReceita: response.data })
                console.log(response)
            }
        })
    }

    getReceita = () => {
        api.get('/receita').then(response => {
            if (response.status === 200) {
                this.setState({ listarReceita: response.data })
            }
        })
    }
    

    render() {
        return (

            <div>
                <Header />
                <section className="container_geral">

                    <section className="container-categorias">
                        <h2>CATEGORIAS</h2>
                        <div className="bar_bar"></div>
                        <div className="categorias">
                            <div className="align">
                                <p>MASSAS</p><br></br>
                                <div className="categ_5">
                                    <a href="#"></a>
                                </div>
                            </div>
                            <div className="align">
                                <p>SOPAS</p><br></br>
                                <div className="categ_6">
                                    <a href="#"></a>
                                </div>
                            </div>
                            <div className="align">
                                <p>SALADAS</p><br></br>
                                <div className="categ_7">
                                    <a href="#"></a>
                                </div>
                            </div>
                            <div className="align">
                                <p>SOBREMESA</p><br></br>
                                <div className="categ_8">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container_mobile">
                        <div className="categorias_mobile">
                            <div className="categ_mobile">
                                <p>LEGUMES</p>
                                <a href="#"><img src="img/frutas.png" title="#" alt="legumes" /></a>
                            </div>
                            <div className="categ_mobile">
                                <p>FRUTAS</p>
                                <a href="#"><img src="img/abacaxi.png" title="#" alt="frutas" /></a>
                            </div>
                            <div className="categ_mobile">
                                <p>MASSAS</p>
                                <a href="#"><img src="img/massas.png" title="#" alt="frutas" /></a>
                            </div>
                            <div className="categ_mobile">
                                <p>SALADAS</p>
                                <a href="#"><img src="img/frutas.png" title="#" alt="frutas" /></a>
                            </div>
                        </div>

                    </section>

                    <section className="container-receitas">
                     
                        <h3 className="receita-la">Cantinho das Receitas</h3>

                        {
                            this.state.listarReceita.map(
                                function (r) {
                                    return (
                            <div key={r.receitaId} className="card_receitas">
                            <img src={"http://localhost:5000/Arquivos/" + r.imagemReceita} />
                            <div className="nav-r">
                                <p>{r.nome}</p>
                                <Link to={{ pathname: '/verreceita', state: { receitaId: r.receitaId} }} >Leia mais</Link>
                            </div>
                        </div>
                                    )
                                }
                            )
                        } 


                         {/* <div className="card_receitas">
                            <img src={rimg} alt="imagem de salada de queijo" />
                            <div className="nav-r">
                                <p> Salada com queijo...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg1} alt="imagem de frango" />
                            <div className="nav-r">
                                <p>Frango em Crosta de Chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg2} alt="imagem de bolo de carne de frango com chia" />
                            <div className="nav-r">
                                <p>Bolo de carne de frango com chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg3} alt="imagem de coxinha Fitness" />
                            <div className="nav-r">
                                <p>Coxinha Fitness...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg4} alt="imagem de salada de queijo" />
                            <div className="nav-r">
                                <p>Salada com queijo...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg5} alt="imagem de frango" />
                            <div className="nav-r">
                                <p>Frango em Crosta de Chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>  */}
                    </section>
                </section>
                <Footer/>
            </div>

        );
    }
}


export default Receita;


   
