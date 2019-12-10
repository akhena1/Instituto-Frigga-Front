import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listarCategoriaProduto: [],
            listarOferta: [],
            listarProduto: [],
            listarUsuario: [],
            Preco: [],
            modalOferta: [],
            open: false
        }
    }

    onOpenModal = (oferta) => {
        this.setState({ open: true, modalOferta: oferta });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    componentDidMount() {
        this.getOferta();
        this.getProduto();
        this.getCategoriaProduto();
        this.getUsuario();
    }

    getOferta = () => {
        
        api.get('/oferta').then(response => {
            if (response.status === 200) {
                this.setState({ listarOferta: response.data })
                console.log(response.data)
            }
        })
    }
    getProduto = () => {
        api.get('/produto').then(response => {
            if (response.status === 200) {
                this.setState({ listarCategoriaReceita: response.data })
            }
        })
    }
    getCategoriaProduto = () => {
        api.get('/categoriaproduto').then(response => {
            if (response.status === 200) {
                this.setState({ listarCategoriaReceita: response.data })
            }
        })
    }

    getUsuario = () => {
        api.get('/usuario').then(response => {
            if (response.status === 200) {
                this.setState({ listarReceita: response.data })
            }
        })
    }

    render() {
        const { open } = this.state;
        return (

            <div>
                <Header />
                <main>
                    <section className="container_geral">
                        <section className="container-categorias">
                            <h2>CATEGORIAS</h2>
                            <div className="bar_bar"></div>
                            <div className="categorias">
                                <div className="align">
                                    <p>LEGUMES</p><br></br>
                                    <div className="categ_1">
                                    <Link to = '#'></Link>
                                    </div>
                                </div>
                                <div className="align">
                                    <p>FRUTAS</p><br></br>
                                    <div className="categ_2">
                                    <Link to = '#'></Link>
                                    </div>
                                </div>
                                <div className="align">
                                    <p>SAFRA DA SEMANA</p><br></br>
                                    <div className="categ_3">
                                    <Link to = '#'></Link>
                                    </div>
                                </div>
                                <div className="align">
                                    <p>MAIS BUSCADOS</p><br></br>
                                    <div className="categ_4">
                                    <Link to = '#'></Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="container_mobile">
                            <div className="categorias_mobile">
                                <div className="categ_mobile">
                                    <p>LEGUMES</p>
                                    <Link to = '#'><img src="IMGS/frutas.png" title="#" alt="legumes" /></Link>
                                </div>
                                <div className="categ_mobile">
                                    <p>FRUTAS</p>
                                    <Link to = '#'><img src="IMGS/abacaxi.png" title="#" alt="frutas" /></Link>
                                </div>
                            </div>
                        </section>
                        <section className="container-produtos container-produtos-isa">
                            <h3 className="isa-produtos">Produtos</h3>

                            {
                                this.state.listarOferta.map(function (of) {
                                    return (
                                        <div key={of.ofertaId} className="card_produtoisa">
                                            <img src={"http://localhost:5000/Arquivos/" + of.imagemProduto} alt={of.tipo} />
                                            <div className="nav-p nav-p-isa">

                                                <p>{of.tipo}<br></br> R$ {of.preco}</p>
                                                <button onClick={() => this.onOpenModal(of)}>Reservar</button>
                                            </div>
                                        </div>
                                    );
                                }.bind(this))
                            }
                            {

                                <div>
                                    <Modal open={open} onClose={this.onCloseModal} center>

                                                        <div className="containerModalProduto">
                                                            <div className="imgModalProduto">
                                                                <img src={"http://localhost:5000/Arquivos/" + this.state.modalOferta.imagemProduto} alt={this.state.modalOferta.tipo} />
                                                            </div>
                                                            <div>
                                                                <h1>{this.state.modalOferta.tipo}</h1>
                                                                <h2>Dados do produtor para contato</h2>
                                                                {
                                                                    this.state.listarUsuario.map(function(u){
                                                                        return(
                                                                            <div>
                                                                            <p>Nome: {u.nome}</p>
                                                                            <p>Email:{u.email}</p>
                                                                            <p>Telefone:{u.telefone}</p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                                
                                                                <p>R$: {this.state.modalOferta.preco}</p>
                                                            </div>
                                                            <button>Ok</button>

                                                    </div>

                                             
                                        
                                    </Modal>
                                </div>
                            }
                               {/* {this.state.listarOferta.map(function(o)){
                                   return(
                                    <div className="card_produtoisa">
                                    <img src={I1} alt="imagem de pepino" />
                                    <div className="nav-p nav-p-isa">
                                        <p>Pepino<br></br> R$ 10,25</p>
    
                                        <a onClick={() => this.onOpenModal(o.ofertaId)}>Encomendar</a>
                                    </div>
                                </div>

                               )}}  */}
                           
                            {/* <div className="card_produtoisa">
                                <img src={I2} alt="imagem de tomates" />
                                <div className="nav-p nav-p-isa">
                                    <p>tomates<br></br> R$ 9,99</p>
                                    <a href="login.html" title="login">Encomendar</a>
                                </div>
                            </div>
                            <div className="card_produtoisa">
                                <img src={I3} alt="imagem de uma alface" />
                                <div className="nav-p nav-p-isa">
                                    <p>Alface<br></br> R$ 3,99</p>
                                    <a href="login.html" title="login">Encomendar</a>
                                </div>
                            </div>
                            <div className="card_produtoisa">
                                <img src={I3} alt="imagem de alface" />
                                <div className="nav-p nav-p-isa">
                                    <p>Alface<br></br> R$ 3,99</p>
                                    <a href="login.html" title="login">Encomendar</a>
                                </div>
                            </div>

                            <div className="card_produtoisa"
                            >
                                <img src={I1} alt="imagem de pepino" />
                                <div className="nav-p nav-p-isa">
                                    <p> Pepino<br></br> R$ 10,25 </p>
                                    <a href="login.html" title="login">Encomendar</a>
                                </div>

                            </div>

                            <div className="card_produtoisa">
                                <img src={I2} alt="imagem de tomates" />
                                <div className="nav-p nav-p-isa">
                                    <p>tomates<br></br> R$ 9,99</p>
                                    <a href="login.html" title="login">Encomendar</a>
                                </div> */}
                            {/* </div> */}
                        </section>
                    </section>>
                </main>
                <Footer />
            </div>
        );
    }
}
export default Produto;