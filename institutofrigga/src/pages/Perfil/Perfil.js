import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";
import iconPerfil from '../../assets/img/iconperfil.svg';
import { api, apiFormData } from '../../services/api';
import { parseJwt } from '../../services/auth';





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
    this.getOferta();
    this.getCategoriaProduto();
    this.getProduto();
    this.getReceita();
    this.getCategoriaReceita();
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
        if (response.status === 200) {
          this.setState({ listaOferta: response.data })
        }
        setTimeout(500);
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
  //#endregion

  //#region POSTs

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

  // 02 - Adicionamos um setState específico
  postSetStateFile = (input) => {
    this.setState({
      postOferta: {
        ...this.state.postOferta, [input.target.name]: input.target.files[0],
      }
    })
  }

  postSetStateFileReceita = (input) => {
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

  //#endregion

  //#region DELETEs
  deleteOferta = (id) =>{

    this.setState({ successMsg: "" })

    api.delete('/oferta/' + id)
      .then(response => {
        if (response.status === 200) {
          this.setState({ successMsg: "Excluído com sucesso" })
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ erroMsg: "Falha ao excluir" })
      })
  }

  deleteReceita(id){

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
                <label >
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
                  <input accept="image/*" type="file" name="imagemProduto" ref={this.state.postOferta.imagemProduto} onChange={this.postSetStateFile} />
                </div>
                <label >
                  <select
                    name="produtoId"
                    id="categoria__produto"
                    value={this.state.listaProduto.produtoId}
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
                <label >
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
                  <input accept="image/*" type="file" name="imagemReceita" ref={this.state.postReceita.imagemReceita} onChange={this.postSetStateFileReceita} />
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
        <Footer />
      </>
    )
  }
}
export default Perfil;