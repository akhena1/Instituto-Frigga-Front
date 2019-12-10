import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";
import iconPerfil from '../../assets/img/iconperfil.svg';
import api from '../../services/api';
import { parseJwt } from '../../services/auth';




class Perfil extends Component {
  constructor() {
    super()
    this.state = {

      // listaPerfil: [],
      listaOferta: [],
      listaReceita: [],
      listaCategoriaProduto: [],
      listaCategoriaReceita: [],

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
    
      postOferta: {
        tipoProduto: "",
        tipo: "",
        preco: "",
        peso: "",
        quantidade: ""
      },

      putOferta: {
        tipoProduto: "",
        tipo: "",
        preco: "",
        peso: "",
        quantidade: ""
      },

      postReceita: {
        nome: "",
        tipoReceita: "",
        ingredientes: "",
        modoDePreparo: ""
      },

      putReceita: {
        nome: "",
        tipoReceita: "",
        ingredientes: "",
        modoDePreparo: ""
      },

      erroMsg: "",
      successMsg: "",
      modal: false

    }

  }

  componentDidMount() {
    // this.getPerfil();
    this.getOferta();
    this.getReceita();
    this.getCategoriaProduto();
    this.getCategoriaReceita();
  }

  //#region GETs

  // getPerfil = () => {
  //   api.get('/usuario')
  //     .then(response => {
  //       if (response.status === 200) {
  //         this.setState({ listaPerfil: response.data })

  //       }
  //     })
  // }


  getOferta = () => {
    api.get('/oferta')
      .then(response => { 
        if (response.status === 200) {
          this.setState({ listaOferta: response.data }, () => console.log("Lista de Ofertas: ", this.state.listaOferta))
        }
      })
  }

  getReceita = () => {
    api.get('/receita')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaReceita: response.data }, () => console.log("Lista de Receitas: ", this.state.listaReceita))
        }
      })
  }

  getCategoriaProduto = () => {
    api.get('/categoriaproduto')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaOferta: response.data }, () => console.log("Lista de categorias(Produtos): ", this.state.listaCategoriaProduto))
        }
      })
  }

  getCategoriaReceita = () => {
    api.get('/categoriareceita')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaOferta: response.data }, () => console.log("Lista de categorias(Receitas): ", this.state.listaCategoriaReceita))
        }
      })
  }
  //#endregion

  //#region POSTs

  PostSetStateOferta = (input) => {
    this.setState({
      postOferta: {
        ...this.setState.postOferta, [input.target.name]: input.target.value
      }
    })
  }

  PostSetStateReceita = (input) => {
    this.setState({
      postReceita: {
        ...this.setState.postReceita, [input.target.name]: input.target.value
      }
    })
  }

  postOferta = (o) => {

    o.preventDefault();

    let ofertaFormData = new FormData();

    ofertaFormData.set("tipo", this.state.postOferta.tipo);
    ofertaFormData.set("tipoProduto", this.state.postOferta.tipoProduto);
    ofertaFormData.set("preço", this.state.postOferta.preco)
    ofertaFormData.set("peso", this.state.postOferta.peso)
    ofertaFormData.set("quantidade", this.state.postOferta.quantidade)
    ofertaFormData.set("usuarioId", parseJwt().Id);

    api.post('/oferta', this.state.ofertaFormData)
      .then(response => {
        console.log(response);
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

    api.post('/receita', this.state.postReceita)
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

  //#endregion

  //#region DELETEs
  deleteOferta(id) {

    this.setState({ successMsg: "" })

    api.delete('/oferta/' + id)
      .then(response => {
        if (response.status === 200) {
          this.setState({ successMsg: "Excluído com sucesso" })

          setTimeout(() => {
            this.getOferta();
          }, 1500);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Falha ao excluir" })
      })
  }

  deleteReceita(id) {

    this.setState({ successMsg: "" })
    api.delete('/receita/' + id)
      .then(response => {
        if (response.status === 200) {
          this.setState({ successMsg: "Excluído com sucesso" })

          setTimeout(() => {
            this.getReceita();
          }, 1500);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Falha ao excluir" })
      })
  }

  //#endregion

  //#region PUTs

  // PutSetStateOferta = (input) => {
  //   this.setState({
  //     putOferta: {
  //       ...this.setState.putOferta, [input.target.name]: input.target.value
  //     }
  //   })
  // }

  // PutSetStateReceita = (input) => {
  //   this.setState({
  //     putReceita: {
  //       ...this.setState.putReceita, [input.target.name]: input.target.value
  //     }
  //   })
  // }

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  // openModalOferta = (o) => {
  //   console.log("Abrindo modal")
  //   this.toggle();
  //   this.setState({ putOferta: o });
  //   console.log("PUT", this.state.putOferta);
  // }

  // openModalReceita = (r) => {
  //   this.toggle();
  //   this.setState({ putReceita: r });
  //   console.log("PUT", this.state.putReceita);
  // }

  // putOferta = (event) => {
  //   event.preventDefault();
  //   let oferta_id = this.state.putOferta.ofertaId;
  //   let oferta_alterada = this.state.putOferta;


  //   api.put('/oferta/' + oferta_id, oferta_alterada)
  //     .then(() => {
  //       this.setState({ successMsg: "Evento alterado com sucesso!" });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ erroMsg: "Falha ao alterar o Evento" });
  //     })

  //   this.toggle();

  //   setTimeout(() => {
  //     this.getOferta();
  //   }, 1500);

  //   setTimeout(() => {
  //     this.setState({ successMsg: "" });
  //     this.setState({ erroMsg: "" });
  //   }, 1500);
  // }

  // putReceita = (event) => {
  //   event.preventDefault();
  //   let receita_id = this.state.putReceita.receitaId;
  //   let receita_alterada = this.state.putReceita;


  //   api.put('/receita/' + receita_id, receita_alterada)
  //     .then(() => {
  //       this.setState({ successMsg: "Receita alterado com sucesso!" });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ erroMsg: "Falha ao alterar a Receita" });
  //     })

  //   this.toggle();

  //   setTimeout(() => {
  //     this.getOferta();
  //   }, 1500);

  //   setTimeout(() => {
  //     this.setState({ successMsg: "" });
  //     this.setState({ erroMsg: "" });
  //   }, 1500);

  // }

  //#endregion

  render() {
    return (
      <>
        <Header />
        <main>
          <section className="profile">
            <div className="profile_icone">
              <h1>Perfil</h1>
              <img src={iconPerfil} alt="icone usuario" />
            </div>

            <div className="profile_dados">

              <div className="bloco">
                <div className="data_data">
                  Nome:
                </div>
                <div className="info_data">
                  Beltrano da Silva
                </div>
              </div>

              <div className="bloco">
                <div className="data_data">
                  Telefone:
                  </div>
                <div className="info_data">
                  (11) 9999-9999
                  </div>
              </div>

              <div className="bloco">
                <div className="data_data">
                  E-mail:
                  </div>
                <div className="info_data">
                  beltrano@gmail.com
                 </div>
              </div>

            </div>
          </section>
          <section className="product_recipes">
            <h2>Cadastrar Produto</h2>
            <div className="card_profile">
            <form onSubmit={this.postOferta}>
                <label>
                  <input type="text"
                    id="oferta__produto"
                    placeholder="Nome do produto..."
                    name="Tipo"
                    value={this.state.listaOferta.tipo}
                    onChange={this.PostSetStateOferta}
                    required />
                </label>
                <label >
                  <select
                    name="tipoProduto"
                    id="categoria__produto"
                    value={this.state.listaCategoriaProduto.tipoProduto}
                    onChange={this.PostSetStateOferta} >
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
                {/* </label>
              <div className="imagem_incluir">
                <p>Clique para<br />
                  incluir Imagem</p>
                <button type="submit" alt="botao incluir imagem" className="btn_incluir_imagem">+</button>
              </div>
                <label > */}
                  <input
                    type="text"
                    name="Peso"
                    id="peso__produto"
                    placeholder="Peso..."
                    value={this.state.listaOferta.Peso}
                    onChange={this.PostSetStateOferta} required>
                  </input>
                </label>
                <label>
                  <input
                    type="text"
                    id="oferta__preco"
                    name="preco"
                    value={this.state.listaOferta.preco}
                    placeholder="Preço por Kg..."
                    onChange={this.PostSetStateOferta} required />
                </label>
                <label>
                  <input
                    type="text"
                    id="oferta__quantidade"
                    name="quantidade"
                    value={this.state.listaOferta.quantidade}
                    placeholder="Quantidade..."
                    onChange={this.PostSetStateOferta} required />
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
                            <td>{o.tipo}</td>
                            <td>{o.tipoProduto}</td>
                            <td>{o.peso}</td>
                            <td>{o.preco}</td>
                            <td>{o.quantidade}</td>
                            <td className="editar">
                              <button onClick={() => this.openModalOferta(o)}>
                              <i className="fas fa-edit"></i>Editar
                              </button>
                            </td>
                            <td className="delete">
                              <button   onClick={() => this.deleteOferta(o.ofertaId)}>
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
                         <Link to = '#'>Anterior</Link>
                        <div className="numtablepager">
                        <Link to = '#'>1</Link>
                        <Link to = '#'>2</Link>
                        <Link to = '#'>3</Link>> 
                        </div>
                        <Link to = '#'>Próxima</Link>
                      </div>
                    </td>
                  </tr>
                </tfoot>

              </table>

            </div>
            <h2>Cadastrar Receitas</h2>
            <div className="card_profile">
              <div className="imagem_incluir">
                <p>Clique para<br />
                  incluir Imagem</p>
                <button type="submit" alt="botao incluir imagem" className="btn_incluir_imagem">+</button>
              </div>
              <form onSubmit={this.postReceita}>
                <label>
                  <input
                    type="text"
                    id="nome__receita"
                    placeholder="Nome receita..."
                    name="nome"
                    value={this.state.listaReceita.nome}
                    onChange={this.postSetStateReceita}
                    required />
                </label>
                <label></label>
                <select
                  name="tipoReceita"
                  id="categoria__receita"
                  value={this.state.listaReceita.tipoReceita}
                  onChange={this.postSetStateReceita}
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
                    value={this.state.listaReceita.ingredientes}
                    onChange={this.postSetStateReceita}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="modoDePreparo"
                    placeholder="Modo de preparo..."
                    id="modo__preparo"
                    value={this.state.listaReceita.modoDePreparo}
                    onChange={this.postSetStateReceita}
                  />
                </label>
              </form>
              <button type="submit" alt="botao cadastrar receitas" className="btn_cadastrar_receita">Inserir receita
                        <div id="cadastro__receita"></div>
              </button>
            </div>

            <div className="tabela_receitas">
              <table>
                <thead>
                  <tr>
                    {/* <th>
                  <div>Imagem</div>
                </th> */}
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
                            <td> <Link to={{ pathname: '/verreceita', state: { receitaId: r.receitaId} }} >Ver Receita</Link></td>
                            <td className="editar">
                              <button onClick={() => this.openModalReceita(r)}>
                              <i className="fas fa-edit"></i>Editar
                              </button>
                            </td>
                            <td className="delete">
                              <button   onClick={() => this.deleteReceita(r.receitaId)}>
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
                      <Link to = '#'>Anterior</Link>
                        <div className="numtablepager">
                          <Link to='#'>1</Link>
                          <Link to='#'>1</Link>
                          <Link to='#'>1</Link>
                          </div>
                       <Link to = '#'>Próxima</Link>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
export default Perfil;