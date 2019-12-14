import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { usuarioAutenticado } from '../../services/auth';




class Produto extends Component {
    constructor() {
        super();
        this.state = {
            listarCategoriaProduto: [],
            listarOferta: [],
            listarProduto: [],
            listarUsuario: [],
            Preco: [],
            modalOferta: {
                usuario: {
                    nome: "",
                    telefone: ""
                }
            },
            open: false,
            setStateFiltro: "",
            setStateTodos: "",
            produtoFiltro: ""
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
        this.getFilltro();
        this.getProdutoFiltro();
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
                this.setState({ listarProduto: response.data })
            }
        })
    }

    getCategoriaProduto = () => {
        api.get('/categoriaproduto').then(response => {
            if (response.status === 200) {
                this.setState({ listarCategoriaProduto: response.data })
            }
        })
    }

    getUsuario = () => {
        api.get('/usuario').then(response => {
            if (response.status === 200) {
                this.setState({ listarUsuario: response.data })
            }
        })
    }

    getFiltro = () => {
        if (this.atualizaSelect.value === "Todos"){
            console.log(this.getProduto)
        }else{
            api.get('/categoriaproduto' + this.state.setStateFiltro)
            .then(response => {
                if (response.status === 200) {
                    this.setState({listarCategoriaProduto : response.data});
                }
            })
        }
    }

    atualizaSelect = (value) => {
        this.setState({ setStateFiltro : value })
        setTimeout(() => {
            this.getFiltro(this.state.filtrooferta)
        }, 500)
    }

    filtrarListaPorCategoria = (idCategoria) => {
        console.log("Id Categoria: ", idCategoria);
        api.get("/filtro/filtrooferta/" + idCategoria)
        .then(res => {
            this.setState({listarOferta : res.data});
        })
        .catch(erro => console.log("Deu erro na busca de ofertas por id categoria: ", erro))
    }
    getProdutoFiltro = (id) => {
        api.get('/produto')
            .then(response => {
                return this.setState({produtoFiltro: response.data.tipo}),
                console.log(this.state.produtoFiltro)
            })
            .catch(error => {
                return ""
            })
    }

    render() {
        const { open } = this.state;
        return (

            <div>
                <Header />
                <main>

                    <div className= "container_geral">
                        <div className="container-categorias">
                        <h2>CATEGORIAS</h2>
                        <div className="bar_bar"></div>
                        <div className= "categorias">
                        {
                                    
                                    this.state.listarCategoriaProduto.map(fo =>{
                                        return(
                                            <div className= "align">
                                            <p>{fo.tipoProduto}</p>
                                                <div className="categ_1" onClick={() => this.filtrarListaPorCategoria(fo.categoriaProdutoId)}>

                                                </div>
                                            </div>
                                        )
                                    })
                                }  
                           </div>

                        </div>
                        
                    </div>
                    
                    <section className="container_geral">
                        {/* <section className="container-categorias">
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
                        </section> */}
                        <section className="container_mobile">
                            <div className="categorias_mobile">
                                {
                                     this.state.listarCategoriaProduto.map(fo =>{
                                        return(
                                            <div className= "categ_mobile">
                                            <p>{fo.tipoProduto}</p>
                                                <a onClick={() => this.filtrarListaPorCategoria(fo.categoriaProdutoId)}>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                                
                                 {/* <div className="categ_mobile">
                                    <p>LEGUMES</p>
                                    <a href="#"><img src="IMGS/frutas.png" title="#" alt="legumes" /></a>
                                </div> 
                                 <div className="categ_mobile">
                                    <p>FRUTAS</p>
                                    <a href="#"><img src="IMGS/abacaxi.png" title="#" alt="frutas" /></a>
                                </div> */}
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

                                                <p key={of.ofertaId}>{this.state.produtoFiltro}<br></br> R$ {of.preco}</p>
                                                {
                                                   usuarioAutenticado()? (
                                                    <Link onClick={() => this.onOpenModal(of)}>Reservar</Link>
                                                   ):(
                                                    <Link to="/Entrar">Reservar</Link>
                                                   ) 
                                                }
                                               
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

                                                <h2> Dados do produto para contato </h2>

                                                <p>Nome: {this.state.modalOferta.nome}</p>
                                               
                                                <p>Telefone: {this.state.modalOferta.telefone}</p>
                                                <p>Preço: {this.state.modalOferta.preco}</p>
                                               
                                            </div>
                                           

                                        </div>  
                                    </Modal>
                                </div>
                            }
                            {/* <div className="card_produtoisa">
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

                <div className="card_produtoisa"
                >
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
                        <a href="login.html" title="login">Encomendar</a>
                    </div>
                </div> */}
                        </section>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}
export default Produto;