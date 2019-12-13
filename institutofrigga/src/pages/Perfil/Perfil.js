import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";
import iconPerfil from '../../assets/img/iconperfil.svg';
import Axios from 'axios';
import { api, apiFormData } from '../../services/api';
import { parseJwt } from '../../services/auth';
import Modal from 'react-responsive-modal';

class Perfil extends Component {
  constructor(props) {
    super(props)
    this.state = {

      // listaPerfil: [],
      listaProduto: [],
      listaOferta: [],
      listaReceita: [],
      listaCategoriaProduto: [],
      listaCategoriaReceita: [],
      usuario: [],
      Role: "",
      nameId: "",
      Telefone: "",
      Emai: "",
      // postPerfil: {
      //   nome: "",
      //   telefone: "",
      //   email: ""
      // },

      // putPerfil: {
      //   nome: "",
      //   telefone: "",
      //   email: ""
      // },

      postProduto: {
        tipo: "",
        tipoProduto: ""
      },

      postOferta: {
        produtoId: "",
        preco: "",
        peso: "",
        imagemProduto: React.createRef(),
        quantidade: "",
      },

      putOferta: {
        ofertaId: null,
        imagemProduto: React.createRef(),
        usuarioId: parseJwt().Id,
        produtoId: "",
        
        preco: "",
        peso: "",
        quantidade: ""
      },

      putOfertaAlterada: {
        imagemProduto: React.createRef(),
        tipo: "",
        tipoProduto: "",
        preco: "",
        peso: "",
        quantidade: ""
      },

      postReceita: {
        imagemReceita: React.createRef(),
        nome: "",
        tipoReceita: "",
        ingredientes: "",
        modoDePreparo: ""
      },

      putReceita: {
        imagemReceita: React.createRef(),
        nome: "",
        tipoReceita: "",
        ingredientes: "",
        modoDePreparo: ""
      },

      // modalOferta: {
      //   usuario: {
      //     tipoProduto: "",
      //     tipo: "",
      //     preco: "",
      //     peso: "",
      //     quantidade: ""
      //   }
      // },
      openReceita: false,
      openOferta: false,
    }

  }





  componentDidMount() {
    this.getOferta();
    this.getCategoriaProduto();
    this.getProduto();
    this.getReceita();
    this.getCategoriaReceita();
    console.log(parseJwt());
  }
   
    
    
    
    



  getProduto = () => {
    api.get('/produto')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaProduto: response.data })
        }
        setTimeout(500);
        console.log("Lista de Produtos: ", this.state.listaProduto)
      })
      .catch(error => console.log(error))
  }

  getOferta = () => {
    api.get('/oferta')
      .then(response => {
        console.log(response)
        this.setState({ listaOferta: response.data })
        console.log("Lista de Ofertas: ", this.state.listaOferta)
      })
      .catch(error => console.log(error))
  }

  getReceita = () => {
    api.get('/receita')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaReceita: response.data })
        }
        setTimeout(500);
        console.log("Lista de Receitas: ", this.state.listaReceita)
      })
      .catch(error => console.log(error))
  }

  getCategoriaProduto = () => {
    api.get('/categoriaProduto')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaCategoriaProduto: response.data })
        }
        setTimeout(500);
        console.log("Lista de categorias(Produto): ", this.state.listaCategoriaProduto)
      })
      .catch(error => console.log(error))
  }

  getCategoriaReceita = () => {
    api.get('/categoriaReceita')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaCategoriaReceita: response.data })
        }
        setTimeout(500);
        console.log("Lista de categorias(Receita): ", this.state.listaCategoriaReceita)
      })
      .catch(error => console.log(error))
  }

  atualizaEstadoProduto = (input) => {
    this.setState({
      postProduto: {
        ...this.state.postProduto, [input.target.name]: input.target.value
      }
    })
  }

  atualizaEstadoOferta = (input) => {
    this.setState({
      postOferta: {
        ...this.state.postOferta, [input.target.name]: input.target.value
      }
    })
  }


  atualizaEstadoReceita = input => {
    this.setState({
      postReceita: {
        ...this.state.postReceita, [input.target.name]: input.target.value
      }
    })
  }

  atualizaArquivoOferta = (input) => {
    this.setState({
      postOferta: {
        ...this.state.postOferta, [input.target.name]: input.target.files[0],
      }
    })
  }

  atualizaArquivoPutOferta = (input) => {
    this.setState({
      postOferta: {
        ...this.state.postOferta, [input.target.name]: input.target.files[0],
      }
    })
  }

  atualizaArquivoReceita = (input) => {
    this.setState({
      postReceita: {
        ...this.state.postReceita, [input.target.name]: input.target.files[0],
      }
    })
  }

  atualizaArquivoPutReceita = (input) => {
    this.setState({
      postReceita: {
        ...this.state.postReceita, [input.target.name]: input.target.files[0],
      }
    })
  }

  postProduto = (p) => {

    console.log("Produto do state: ", this.state.postProduto);

    let produto = {
      tipo: this.state.postProduto.tipo,
      categoriaProdutoId: this.state.postProduto.tipoProduto
    }

    api.post('/produto', produto)
      .then(response => {
        console.log(response);
        window.alert("Produto cadastrado, agora exponha sua oferta!")
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Não foi possível cadastrar oferta" });
      })

    setTimeout(() => {
      this.getOferta();
    }, 1500);
  }

  postOferta = (o) => {

    o.preventDefault();

    console.log("Oferta do POST: ", this.state.postOferta);


    let ofertaForm = new FormData();

    ofertaForm.set("produtoId", this.state.postOferta.produtoId);
    ofertaForm.set('usuarioId', parseJwt().Id);
    ofertaForm.set("preco", this.state.postOferta.preco);
    ofertaForm.set("peso", this.state.postOferta.peso);
    ofertaForm.set("quantidade", this.state.postOferta.quantidade);
    ofertaForm.set('imagemProdutosss', this.state.postOferta.imagemProduto.current.files[0]);
    ofertaForm.set('imagemProduto', this.state.postOferta.imagemProduto.current.value);

    apiFormData.post('/oferta', ofertaForm)
      .then(response => {
        console.log("Oferta Post: ", response);
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Não foi possível cadastrar oferta" });
      })

    setTimeout(() => {
      this.getOferta();
    }, 1500);
  }

  postReceita = (r) => {

    r.preventDefault();

    console.log("Receita do POST: ", this.state.postReceita);

    let ReceitaForm = new FormData();

    ReceitaForm.set("nome", this.state.postReceita.nome);
    ReceitaForm.set("ingredientes", this.state.postReceita.ingredientes);
    ReceitaForm.set('usuarioId', parseJwt().Id);
    ReceitaForm.set("categoriaReceitaId", this.state.postReceita.categoriaReceitaId);
    ReceitaForm.set("modoDePreparo", this.state.postReceita.modoDePreparo);
    ReceitaForm.set('imagemReceitassss', this.state.postReceita.imagemReceita.current.files[0]);
    ReceitaForm.set('imagemReceita', this.state.postReceita.imagemReceita.current.value);

    api.post('/receita', ReceitaForm)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Não foi possível cadastrar receita" });
      })

    setTimeout(() => {
      this.getReceita();
    }, 1500);
  }

  atualizaEstadoPutOferta = (input) => {
    this.setState({
      putOferta: {
        ...this.state.putOferta, [input.target.name]: input.target.value
      }
    })
  }

  atualizaEstadoPutReceita = (input) => {
    this.setState({
      putReceita: {
        ...this.state.putReceita, [input.target.name]: input.target.value
      }
    })
  }

  //#region DELETEs
  deleteOferta = (id) => {

    event.preventDefault();

    console.log(this.state.putOferta)
    let ofertaAlterada = this.state.putOferta;


   /*  await Axios({
      method: 'put',
      headers: { 'Authorization': "bearer " + localStorage.getItem('usuario-frigga'), 'Content-Type': 'application/json' },
      url: 'http://localhost:5000/api/oferta/' + this.state.putOferta.ofertaId,
      data: JSON.stringify({
        ofertaId: this.state.putOferta.ofertaId,
        preco: this.state.putOferta.preco,
        peso: this.state.putOferta.peso,
        produtoId: this.state.putOferta.produtoId,
        usuarioId: this.state.putOferta.usuarioId,
        quantidade: this.state.putOferta.quantidade
      }),
    })
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)}); */

    // api.put('/oferta/' + this.state.putOferta.ofertaId, {ofertaAlterada})
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

    // setTimeout(() => {
    //   this.getOferta();
    // }, 1500);

  }


  openModalOferta = (o) => {


    this.setState({ openOferta: true, modalOferta: o });
    this.setState({ putOferta: o });

    console.log("PUT", this.state.putOferta);
  }

  onCloseModal = () => {
    this.setState({ openOferta: false });
  };

  putReceita = (event) => {

    event.preventDefault();
    let receita_Id = this.state.putReceita.receitaId;
    let receitaAlterada = this.state.putReceita;


    api.put('/receita/' + receita_Id, receitaAlterada)
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })

    setTimeout(() => {
      this.getOferta();
    }, 1500);

  }

  openModalReceita = (r) => {

    this.setState({ openReceita: true, modalOferta: r });
    this.setState({ putReceita: r });
    console.log("PUT", this.state.putReceita);
  }

  deleteOferta(id) {
    api.delete('/oferta/' + id)
      .then(response => {
        if (response.status === 200) {
          setTimeout(() => {
            this.getOferta();
          }, 1500);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteReceita(id) {

    this.setState({ successMsg: "" })
    api.delete('/receita/' + id)
      .then(response => {
        if (response.status === 200) {
          this.setState({ successMsg: "Excluído com sucesso" })
            this.getReceita();
 
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return(
      <>
        <Header />
        <main>
          <section className="profile">
            <div className="profile_icone">
              <h1>Perfil</h1>
              <img src={iconPerfil} alt="icone usuario"/>
            </div>
              {(this.state.usuario.map(element => {
                return (
                  <thead>
                  <tr>
                  <td>{element.Nome}</td>
                  <td>{element.Telefone}</td>
                  <td>{element.Email}</td>
                  </tr>
                </thead>)      
                }))}

                <div className="profile_dados">

                  <div className="bloco">
                    <div className="data_data">
                      Nome:
</div>
                    <div className="info_data">
                    </div>
                  </div>

                  <div className="bloco">
                    <div className="data_data">
                      Telefone:
                    </div>
                    <div className="info_data">
                    k
                    </div>
                  </div>

                  <div className="bloco">
                    <div className="data_data">
                      E-mail:
                    </div>
                    <div className="info_data">
                      a
                    </div>
                  </div>
                </div>



          </section>
          <section className="product_recipes">
            <h2>Cadastrar Produto</h2>
            <div className="card_profile">
              <form onSubmit={this.postProduto}>
                <label>
                  <input type="text"
                    id="oferta__produto"
                    placeholder="Nome do produto..."
                    name="tipo"
                    value={this.state.postProduto.tipo}
                    onChange={this.atualizaEstadoProduto}
                    required />
                </label>
                <label>
                  <select
                    name="tipoProduto"
                    id="categoria__produto"
                    value={this.state.postProduto.tipoProduto}
                    onChange={this.atualizaEstadoProduto}>
                    <option value="">Escolha uma categoria...</option>
                    {
                      this.state.listaCategoriaProduto.map(function (cp) {
                        return (
                          <option
                            key={cp.categoriaProdutoId}
                            value={cp.categoriaProdutoId}
                          >
                            {cp.tipoProduto}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>


                <button
                  type="submit"
                  alt="botao cadastrar produtos"
                  className="btn_cadastrar_produto">
                  Cadastrar
                </button>
              </form>
            </div>


            <div className="card_profile">
              <form onSubmit={this.postOferta}>
                <div className="imagem_incluir">
                  <p>Clique para<br />
                    incluir Imagem</p>
                  <input accept="image/*" type="file" name="imagemProduto" ref={this.state.postOferta.imagemProduto} onChange={this.atualizaArquivoOferta} />
                </div>
                <label >
                  <select
                    name="produtoId"
                    id="categoria__produto"
                    value={this.state.postOferta.produtoId}
                    onChange={this.atualizaEstadoOferta} >
                    <option value="">Produto a ser cadastrado</option>
                    {
                      this.state.listaProduto.map(function (p) {
                        return (
                          <option
                            key={p.produtoId}
                            value={p.produtoId}
                          >
                            {p.tipo}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>
                <label>
                  <input
                    type="text"
                    name="peso"
                    id="peso__produto"
                    placeholder="Peso..."
                    value={this.state.postOferta.peso}
                    onChange={this.atualizaEstadoOferta} required>
                  </input>
                </label>
                <label>
                  <input
                    type="text"
                    id="oferta__preco"
                    name="preco"
                    value={this.state.postOferta.preco}
                    placeholder="Preço por Kg..."
                    onChange={this.atualizaEstadoOferta} required />
                </label>
                <label>
                  <input
                    type="text"
                    id="oferta__quantidade"
                    name="quantidade"
                    value={this.state.postOferta.quantidade}
                    placeholder="Quantidade..."
                    onChange={this.atualizaEstadoOferta} required />
                </label>
                <button
                  type="submit"
                  alt="botao cadastrar produtos"
                  className="btn_cadastrar_produto"
                >
                  Cadastrar</button>
              </form>
            </div>


            <div className="tabela_produtos">
              <table>
                <thead>
                  <tr>
                    <th>Nome do produto</th>
                    <th>Categoria</th>
                    <th>Peso</th>
                    <th>Preço/kg</th>
                    <th>Qtd Estoque</th>
                    <th className="void "></th>
                    <th className="void "></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaOferta.map(
                      function (o) {
                        return (
                          <tr key={o.ofertaId}>
                            <td>{o.produto.tipo}</td>
                            <td>{o.produto.categoriaProduto.tipoProduto}</td>
                            <td>{o.peso}</td>
                            <td>{o.preco}</td>
                            <td>{o.quantidade}</td>
                            <td className="editar">
                              <button onClick={() => this.openModalOferta(o)}>
                                <i className="fas fa-edit"></i>Editar
                              </button>
                            </td>
                            <td className="delete">
                              <button onClick={() => this.deleteOferta(o.ofertaId)}>
                                <i className="fas fa-trash"></i>Excluir
                              </ button>
                            </td>
                          </tr>
                        )
                      }.bind(this)
                    )
                  }
                </tbody>

                <tfoot>
                  <tr>
                    <td className="bg-pager" colSpan="7">
                      <div className="tablepager">
                        <Link to='#'>Anterior</Link>
                        <div className="numtablepager">
                          <Link to='#'>1</Link>
                          <Link to='#'>2</Link>
                          <Link to='#'>3</Link>>
                        </div>
                        <Link to='#'>Próxima</Link>
                      </div>
                    </td>
                  </tr>
                </tfoot>

              </table>

            </div>
            <h2>Cadastrar Receitas</h2>
            <div className="card_profile">
              <form onSubmit={this.postReceita}>
                <div className="imagem_incluir">
                  <p>Clique para<br />
                    incluir Imagem</p>
                  <input accept="image/*" type="file" name="imagemReceita" ref={this.state.postReceita.imagemReceita} onChange={this.atualizaArquivoReceita} />
                </div>
                <label>
                  <input
                    type="text"
                    id="nome__receita"
                    placeholder="Nome receita..."
                    name="nome"
                    value={this.state.postReceita.nome}
                    onChange={this.atualizaEstadoReceita}
                    required />
                </label>
                <label></label>
                <select
                  name="categoriaReceitaId"
                  id="categoria__receita"
                  value={this.state.postReceita.categoriaReceitaId}
                  onChange={this.atualizaEstadoReceita}
                >
                  <option value="">Escolha uma categoria...</option>
                  {
                    this.state.listaCategoriaReceita.map(function (cr) {
                      return (
                        <option
                          key={cr.categoriaReceitaId}
                          value={cr.categoriaReceitaId}
                        >
                          {cr.tipoReceita}
                        </option>
                      )
                    })
                  }
                </select>
                <label>
                  <input
                    type="text"
                    id="ingredientes"
                    name="ingredientes"
                    placeholder="Ingredientes..."
                    value={this.state.postReceita.ingredientes}
                    onChange={this.atualizaEstadoReceita}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="modoDePreparo"
                    placeholder="Modo de preparo..."
                    id="modo__preparo"
                    value={this.state.postReceita.modoDePreparo}
                    onChange={this.atualizaEstadoReceita}
                  />
                </label>
                <button type="submit" alt="botao cadastrar receitas" className="btn_cadastrar_receita">Inserir receita
                        <div id="cadastro__receita"></div>
                </button>
              </form>
            </div>

            <div className="tabela_receitas">
              <table>
                <thead>
                  <tr>
                    <th>Nome da receita</th>
                    <th>Categoria</th>
                    <th className="void"></th>
                    <th className="void "></th>
                    <th className="void "></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaReceita.map(
                      function (r) {
                        return (
                          <tr key={r.receitaId}>
                            <td>{r.nome}</td>
                            <td>{r.categoriaReceita.tipoReceita}</td>
                            <td> <Link to={{ pathname: '/verreceita', state: { receitaId: r.receitaId } }} >Ver Receita</Link></td>
                            <td className="editar">
                              <button onClick={() => this.openModalReceita(r)}>
                                <i className="fas fa-edit"></i>Editar
                              </button>
                            </td>
                            <td className="delete">
                              <button onClick={() => this.deleteReceita(r.receitaId)}>
                                <i className="fas fa-trash"></i>Excluir
                              </ button>
                            </td>
                          </tr>
                        )
                      }.bind(this)
                    )
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td className="bg-pager" colSpan="5">
                      <div className="tablepager">
                        <Link to='#'>Anterior</Link>
                        <div className="numtablepager">
                          <Link to='#'>1</Link>
                          <Link to='#'>1</Link>
                          <Link to='#'>1</Link>
                        </div>
                        <Link to='#'>Próxima</Link>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </main>

        <Modal open={this.state.openOferta} onClose={this.onCloseModal} center>
        <form onSubmit={this.putProduto}>
            
                  <input type="text"
                    id="oferta__produto"
                    placeholder="Nome do produto..."
                    name="tipo"
                    value={this.state.putProduto.tipo}
                    onChange={this.atualizaEstadoProduto}
                    required />
          
         
                  <select
                    name="tipoProduto"
                    id="categoria__produto"
                    value={this.state.putProduto.tipoProduto}
                    onChange={this.atualizaEstadoProduto}>
                    <option value="">Escolha uma categoria...</option>
                    {
                      this.state.listaCategoriaProduto.map(function (cp) {
                        return (
                          <option
                            key={cp.categoriaProdutoId}
                            value={cp.categoriaProdutoId}
                          >
                            {cp.tipoProduto}
                          </option>
                        )
                      })
                    }
                  </select>
                  </form>
                  <form onSubmit = {this.putProduto}>
            <input
              label="Peso"
              name="peso"
              value={this.state.putOferta.peso}
              onChange={this.atualizaEstadoPutOferta}
            />
            <input
              label="Preco"
              name="preco"
              value={this.state.putOferta.preco}
              onChange={this.atualizaEstadoPutOferta}
            />
            <input
              label="Quantidade"
              name="quantidade"
              value={this.state.putOferta.quantidade}
              onChange={this.atualizaEstadoPutOferta}
            />
            <button alt="botao salvar alterações" type="submit"> Salvar</button>
            <button alt="botao fechar modal" onClose={this.onCloseModal}>  Fechar</button>
         </form>
        </Modal>
        <Modal open={this.state.openReceita} onClose={this.onCloseModal} center>
          <form onSubmit={this.putReceita}>
            <input accept="image/*" type="file" name="imagemReceita" ref={this.state.putReceita.imagemReceita} onChange={this.atualizaArquivoPutReceita} />
            <input
              label="Titulo"
              name="nome"
              value={this.state.putReceita.nome}
              onChange={this.atualizaEstadoPutReceita}
            />
            <select
              name="categoriaReceitaId"
              id="categoria__receita"
              value={this.state.postReceita.categoriaReceitaId}
              onChange={this.atualizaEstadoReceita}
            >
              <option value="">Escolha uma categoria...</option>
              {
                this.state.listaCategoriaReceita.map(function (cr) {
                  return (
                    <option
                      key={cr.categoriaReceitaId}
                      value={cr.categoriaReceitaId}
                    >
                      {cr.tipoReceita}
                    </option>
                  )
                })
              }
            </select>
            <button type="submit"> Salvar</button>
            <button type="reset">  Fechar</button>
          </form>
        </Modal>

        <Footer />
      </>
    )
  }
}
export default Perfil;