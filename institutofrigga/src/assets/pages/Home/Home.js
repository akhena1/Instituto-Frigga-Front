import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import r1 from '../../img/r1.jpg';
import r2 from '../../img/r2.jpg';
import r3 from '../../img/r3.jpg';
import p1 from '../../img/tm.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import p4 from '../../img/p4.png';
import api from '../../services/api';
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            listaReceita: [],
            listaOferta: [],

        }
    }
    getReceita = () => {
        api.get('/receita')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaReceita: response.data })
                }
                console.log(response);
            })

    }
    

    componentDidMount() {
        this.getReceita()
    }

    render() {
        return (
            <div>
                <Header />
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
                            {
                                this.state.listaReceita.map(
                                    function (r) {
                                        return (
                                            <Link to={'/receita'} key={r.receitaId} className="card-receita">
                                                <img src={"http://localhost:5000/arquivos/" + r.imagemReceita} />
                                                <p className="position">{r.nome}</p>
                                            </Link>
                                        )
                                    }
                                )
                            }
                            <div className="btn-seemore"><Link to="/receita">Ver mais</Link></div>
                        </section>


                        <section className="container-produtos">

                            {
                                this.state.listaOferta.map(
                                    function (o) {
                                        return (
                                            <div className="card-produto">
                                                <img src={"http://localhost:5000/arquivos/" + o.imagemOferta} />
                                                <div className="nav-p">
                                                    <p>Nome do Produto<br />{o.preco}</p>
                                                    <Link to="/Entrar">Encomendar</Link>
                                                </div>
                                            </div>
                                        );
                                    }
                                )
                            }
                            {/* <div className="card-produto">
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
                            </div> */}

                            <div className="btn-seemore"><Link to="produtos.html" className="btn-seemore">Ver mais..</Link></div>
                        </section>



                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
export default Home;