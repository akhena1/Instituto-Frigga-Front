import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import iconPerfil from '../../assets/img/iconperfil.svg';
import api from '../../services/api';

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

  // toggle = () => {
  //     this.setState({
  //       modal: !this.state.modal
  //     });
  // }

  componentDidMount() {
    this.getPerfil();
    this.getOferta();
    this.getReceita()
  }


  //#region GETs
  getPerfil = () => {
    api.get('/endereco')
      .then(response => {
        if (response.status === 200) {
          this.setState({ listaPerfil: response.data })
        }
      })
  }

  getReceita = () => {
    api.get('/receitas')
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
          this.setState({ listaOFerta: response.data })
        }
      })
  }
  //#endregion

  //#region POSTs
  //    postSetState = (input) =>{
  //     this.setState({
  //         postEvento : {
  //             ...this.state.postPerfil, ...this.state.postTabelaOFerta, [input.target.name] : input.target.value
  //         }
  //     })
  // }

  //     postPerfil = (p) => {

  //       p.preventDefault();
  //       api.post('/perfil', this.state.postEvento)
  //         .then(response => {
  //             console.log(response);
  //         })
  //         .catch(error => {
  //             console.log(error);
  //             this.setState({ erroMsg : "Não foi possível cadastrar evento" });
  //         })

  //         setTimeout(() => {
  //             this.getEventos();
  //         }, 1500);


  //     }

  //     postTabelaOFerta = (o) => {
  //       o.preventDefault();
  //       api.post('/evento', this.state.postEvento)
  //         .then(response => {
  //             console.log(response);
  //         })
  //         .catch(error => {
  //             console.log(error);
  //             this.setState({ erroMsg : "Não foi possível cadastrar evento" });
  //         })

  //         setTimeout(() => {
  //             this.getEventos();
  //         }, 1500);
  //     }

  //#endregion

  //#region DELETE
  //   deleteEvento(id){

  //     this.setState({ successMsg : "" })

  //     api.delete('/perfil/'+id)
  //     .then(response => {
  //         if(response.status === 200){
  //             this.setState({ successMsg : "Excluído com sucesso" })

  //             setTimeout(() => {
  //                 this.getEventos();
  //             }, 1500);
  //         }
  //     })
  //     api.delete('/perfil/'+id)
  //     .then(response => {
  //         if(response.status === 200){
  //             this.setState({ successMsg : "Excluído com sucesso" })

  //             setTimeout(() => {
  //                 this.getEventos();
  //             }, 1500);
  //         }
  //     })
  //     .catch(error => {
  //         console.log(error);
  //         this.setState({ erroMsg : "Falha ao excluir" })
  //     })

  // }
  //#endregion
  render() {
    return (
      <main>
        <Header />
        <section class="profile">
          <div class="profile_icone">
            <h1>Perfil</h1>
            <img src={iconPerfil} alt="icone usuario" />
          </div>
          <div class="profile_dados">
            <form method="POST" id="form_dados">
              <label>Nome
                        <input type="text" placeholder="Digite seu nome..." name="nome" aria-label="digitar nome"
                  required />
              </label>
              <label>Celular
                        <input type="tel" placeholder="Digite seu telefone..." name="telefone"
                  aria-label="digitar telefone" required />
              </label>
              <label>Email
                        <input type="email" placeholder="Digite seu email..." name="email" aria-label="digitar email"
                  required />
              </label><br />
              <div>
                <button type="submit" class="btn_editar_perfil" alt="botao editar perfil">Editar Perfil</button>
              </div>
            </form>
          </div>
        </section>


        <section class="product_recipes">
          <h2>Cadastrar Produto</h2>
          <div class="card_profile">
            <div class="imagem_incluir">
              <p>Clique para<br />
                incluir Imagem</p>
              <button type="submit" alt="botao incluir imagem" class="btn_incluir_imagem">+</button>
            </div>
            <form method="POST" id="form_product">
              <label>
                <input type="text" placeholder="Nome do produto..." name="produto"
                  aria-label="digite nome produto ou selecione" required />
              </label>
              <label for="categoriaproduto"></label>
              <select name="categoriaproduto" id="categoria_produto">
                <option value="1">Categoria</option>
                <option value="2">Farinhas, Cereais e Complementos</option>
                <option value="3">Frutas</option>
                <option value="4">Legumes e Verduras</option>
                <option value="5">Grãos</option>
                <option value="6">Adicionar Categoria</option>
              </select>
              <label for="peso"></label>
              <select name="peso" id="peso">
                <option value="1">1 Kg</option>
                <option value="2">2 kg</option>
                <option value="3">3 kg</option>
                <option value="4">5 kg</option>
                <option value="4">10 kg</option>
              </select>
              <label>
                <input type="text" name="preco" aria-label="incluir preço por quilo"
                  placeholder="Preço por Kg..." required />
              </label>
              <button type="submit" alt="botao cadastrar produtos" class="btn_cadastrar_produto">Cadastrar</button>
            </form>
          </div>

          <div class="tabela_produtos">
            <table>
              <thead>
                <th>
                  {/* <div>Imagem</div> */}
                </th>
                <th>Nome do produto</th>
                <th>Categoria</th>
                <th>Peso</th>
                <th>Preço/kg</th>
                <th> Qtd Estoque</th>
                <th class="void "></th>
              </thead>
              <tbody>
                {
                  this.state.listaOferta.map(
                    function (o) {
                      return (
                        <tr key={o.oferta_id}>
                          <td>{o.oferta_id}</td>
                          <td>{o.produto.titulo}</td>
                          <td>{o.produto.categoria.titulo}</td>
                          <td>{o.preco}</td>
                          <td>{o.peso}</td>
                        </tr>
                      )
                    }.bind(this)
                  )
                }
                <tr >
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
                  <td>10</td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="bg-pager" colSpan="7">
                    <div class="tablepager">
                      <a href="#">Anterior</a>
                      <div class="numtablepager">
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
          <div class="card_profile">
            <div class="imagem_incluir">
              <p>Clique para<br />
                incluir Imagem</p>
              <button type="submit" alt="botao incluir imagem" class="btn_incluir_imagem">+</button>
            </div>
            <form method="POST" id="form_recipes">
              <label>
                <input type="text" placeholder="Nome receita..." name="usuario"
                  aria-label="Digitar nome da receita" required />
              </label>
              <label for="categoriareceita"></label>
              <select name="categoriareceita" id="categoria_receita">
                <option value="1">Categoria</option>
                <option value="2">Farinhas, Cereais e Complementos</option>
                <option value="3">Frutas</option>
                <option value="4">Legumes e Verduras</option>
                <option value="5">Grãos</option>
                <option value="6">Adicionar Categoria</option>
              </select>
              <div class="box">
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
            <button type="submit" alt="botao cadastrar receitas" class="btn_cadastrar_receita">Inserir receita
                        <div id="bg"></div>
            </button>

          </div>



          <div class="tabela_receitas">
            <table>
              <thead>
                <th>
                  <div>Imagem</div>
                </th>
                <th>Nome da receita</th>
                <th>Categoria</th>
                <th class="void"></th>
                <th class="void "></th>
              </thead>
              <tbody>
                {/* {
                  this.state.listaEventos.map(
                    function (r) {
                      return (
                        <tr key={r.receita_id}>
                          <td>{r.receita_id}</td>
                          <td>{r.nome}</td>
                          <td>{r.categoria_receita_id}</td>
                        </tr>
                      )
                    }.bind(this)
                  )
                } */}
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
                <tr>
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Salada de legumes Gourmet</td>
                  <td>Saladas</td>
                  <td><a class="verreceitas" href="#">Ver receita</a></td>
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="bg-pager" colSpan="5">
                    <div class="tablepager">
                      <a href="#">Anterior</a>
                      <div class="numtablepager">
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