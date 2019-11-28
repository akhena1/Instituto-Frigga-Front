import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import iconPerfil from '../../img/iconperfil.svg'
class Perfil extends Component {
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
              <label><p>Descrição</p>
                <textarea name="descricao" placeholder="Descreva um pouco sobre você..."
                  aria-label="Descreva um pouco sobre você"></textarea>
              </label>
              <div>
                <button type="submit" class="btn_editar_perfil" alt="botao editar perfil">Editar Perfil</button>
              </div>
            </form>
          </div>
        </section>


        <section class="product_recipes">
          <h3>Cadastrar Produto</h3>
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
                  <div>Imagem</div>
                </th>
                <th>Nome do produto</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Preço/kg</th>
                <th class="void "></th>
              </thead>
              <tbody>
                <tr >
                  <td>
                    <div id="table_img"></div>
                  </td>
                  <td>Banana nanica</td>
                  <td>Frutas</td>
                  <td>1KG</td>
                  <td>R$8,90</td>
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
                  <td class="delete"><button type="reset"><i class="fas fa-trash"></i></button>Excluir</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="bg-pager" colspan="6">
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
          <h3>Cadastrar Receitas</h3>
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
                  <td class="bg-pager" colspan="5">
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