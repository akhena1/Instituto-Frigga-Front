import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import iconPerfil from '../../assets/img/iconperfil.svg';
import api from '../../services/api';
import { MDBBtn, MDBInput, MDBAlert, MDBModal} from "mdbreact";



class Perfil extends Component {
  constructor() {
    super()
    this.state = {

      listaPerfil: [],
      listaOferta: [],
      listaReceita: []

      // postPerfil : {
      //     Nome: "",
      //     Celular: "",
      //     Email: ""
      // },

      // putPerfil : {
      //   Nome: "",
      //   Celular: "",
      //   Email: ""
      // },

      // postTabelaOFerta: {
      //   Nome: "",
      //   Celular: "",
      //   Email: ""
      // },

      // putTabelaOferta: {
      //   Nome: "",
      //   Celular: "",
      //   Email: ""
      // },


      // erroMsg : "",
      // successMsg : "",
      // modal: false

    }

  }

  // atualizaEstado = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // }


  componentDidMount() {
    this.getPerfil();
    this.getOferta();
    this.getReceita()
  }

  //#region GETs
  getPerfil = () => {
    api.get('/usuario')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaPerfil: response.data })

        }
      })
  }

  getReceita = () => {
    api.get('/receita')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaReceita: response.data })
        }
      })
  }

  getOferta = () => {
    api.get('/oferta')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaOferta: response.data })
        }
      })
  }

  //#endRegion

  //#region POSTs



  //#endregion

  //#region DELETE
    deleteEvento(id){

      this.setState({ successMsg : "" })

      api.delete('/oferta'+id)
      .then(response => {
          if(response.status === 200){
              this.setState({ successMsg : "Excluído com sucesso" })

              setTimeout(() => {
                  this.getEventos();
              }, 1500);
          }
      })
      api.delete('/receita/'+id)
      .then(response => {
          if(response.status === 200){
              this.setState({ successMsg : "Excluído com sucesso" })

              setTimeout(() => {
                  this.getEventos();
              }, 1500);
          }
      })
      .catch(error => {
          console.log(error);
          this.setState({ erroMsg : "Falha ao excluir" })
      })

  }
  //#endregion
  render() {
    return (
      <main>
        <Header />
        <section className="profile">
        {
                                this.state.erroMsg && 
                                <MDBAlert color="danger" >
                                    {this.state.erroMsg}
                                </MDBAlert>
                            }
                        
                            {
                            this.state.successMsg && 
                                <MDBAlert color="success" >
                                    {this.state.successMsg}
                                </MDBAlert>
                            }
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
            <form method="POST" id="form_product">
              <label>
                <input type="text" placeholder="Nome do produto..." name="produto"
                  aria-label="digite nome produto ou selecione" required />
              </label>
              <label >
              <select name="categoriaproduto" id="categoria_produto">
                <option value="1">Categoria</option>
                <option value="2">Farinhas, Cereais e Complementos</option>
                <option value="3">Frutas</option>
                <option value="4">Legumes e Verduras</option>
                <option value="5">Grãos</option>
                <option value="6">Adicionar Categoria</option>
              </select>
              </label>
              <button type="submit" alt="botao cadastrar produtos" className="btn_cadastrar_produto">Cadastrar</button>
            </form>
          </div>


          <div className="card_profile">
            <div className="imagem_incluir">
              <p>Clique para<br />
                incluir Imagem</p>
              <button type="submit" alt="botao incluir imagem" className="btn_incluir_imagem">+</button>
            </div>
            <form method="POST" id="form_product">
              <label >
                <select name="peso" id="peso">
                  <option value="1">1 Kg</option>
                  <option value="2">2 kg</option>
                  <option value="3">3 kg</option>
                  <option value="4">5 kg</option>
                  <option value="4">10 kg</option>
                </select>
              </label>
              <label>
                <input type="text" name="preco" aria-label="incluir preço por quilo"
                  placeholder="Preço por Kg..." required />
              </label>
              <button type="submit" alt="botao cadastrar produtos" className="btn_cadastrar_produto">Finalizar</button>
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
                  <th> Qtd Estoque</th>
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
                          <td>{/* {o.produto.tipo} */}</td>
                          <td>{/* {o.produto.categoriaProduto.tipoProduto} */}</td>
                          <td>{o.peso}</td>
                          <td>{o.preco}</td>
                          <td>{o.quantidade}</td>
                          <td className="editar"><button type="submit"><i className="fas fa-edit"></i>Editar</button></td> 
                          <td className="delete"><button type="reset"><i className="fas fa-trash"></i>Excluir</button></td>
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
                      <a href="#">Anterior</a>
                      <div className="numtablepager">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a></div>
                      <a href="#">Próxima</a>
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
            <form method="POST" id="form_recipes">
              <label>
                <input type="text" placeholder="Nome receita..." name="usuario"
                  aria-label="Digitar nome da receita" required />
              </label>
              <label></label>
              <select name="categoriareceita" id="categoria_receita">
                <option value="1">Categoria</option>
                <option value="2">Farinhas, Cereais e Complementos</option>
                <option value="3">Frutas</option>
                <option value="4">Legumes e Verduras</option>
                <option value="5">Grãos</option>
                <option value="6">Adicionar Categoria</option>
              </select>
              <div className="box">
                <label>
                  <textarea name="ingredientes" placeholder="Ingredientes..."
                    aria-label="incluir ingredientes"></textarea>
                </label>
                <label>
                  <textarea name="biografia" placeholder="Modo de preparo..."
                    aria-label="incluir receita"></textarea>
                </label>
              </div>

            </form>
            <button type="submit" alt="botao cadastrar receitas" className="btn_cadastrar_receita">Inserir receita
                        <div id="bg"></div>
            </button>

          </div>



          <div className="tabela_receitas">
            <table>
              <thead>
                <tr>
                <th>Nome da receita</th>
                <th>Categoria</th>
                <th className="void"></th>
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
                          <td> {/* {r.categoriaReceita.tipoReceita} */}</td>
                          <td><a className="verreceitas" href="#">Ver receita</a></td>
                          <td className="delete"><button type="reset"><i className="fas fa-trash"></i></button>Excluir</td>
                        </tr>
                      )
                    }
                  )
                }
              </tbody>
              <tfoot>
                <tr>
                  <td className="bg-pager" colSpan="5">
                    <div className="tablepager">
                      <a href="#">Anterior</a>
                      <div className="numtablepager">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a></div>
                      <a href="#">Próxima</a>
                    </div>
                  </td>
                </tr>

              </tfoot>

            </table>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}
export default Perfil;