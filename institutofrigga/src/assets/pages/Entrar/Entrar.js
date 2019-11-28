import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IconLogin from '../../img/iconperfil.svg'



class Entrar extends Component {
  constructor() {
    super()
    this.state = {



    }
  }
  render() {
    return (
      <body>
        <Header />
        <main>
          <div class="container_login">
            <section class="esquerda_login">
              <form method="POST" id="form_login">
                <figure>
                  <img src="IMGS/iconperfil.svg" alt="icone do perfil" />
                </figure>
                <div class="form-control">
                  <div class="input-group">
                    <label for="usuarioCadastro">Usuario</label>
                    <input class="input_login" type="text" placeholder="E-mail ou Cpf..."
                      aria-label="Digite seu e-mail ou cpf" name="usuario" id="usuarioCadastro" required />
                  </div>
                  <div class="input-group">
                    <label for="senhaCadastro">Senha</label>
                    <input class="input_login" type="password" placeholder="Senha..." aria-label="Digite a sua senha"
                      name="senha" id="senhaCadastro" required />
                  </div>
                  <div class="buttonsContainer">
                    <button class="btn_login" type="submit">Entrar</button>
                  </div>
                </div>
              </form>
            </section>

            <section class="direita_login">
              <h1> Cadastro </h1>
              <form method="POST" id="form_cadastro">
                <div class="form-control">
                  <div class="input-group radio-group">
                    <label for="cadastroCliente"><input type="radio" value="cliente" name="cadastro" id="cadastroCliente" />
                      Cliente</label>
                    <label for="cadastroFornecedor">
                      <input type="radio" value="fornecedor" name="cadastro" id="cadastroFornecedor" />
                      Fornecedor
              </label>
                  </div>
                  <div class="input-group">
                    <label for="email">E-mail</label>
                    <input class="input_login" type="email" placeholder="E-mail ou Cpf..."
                      aria-label="Digite seu e-mail ou cpf" id="email" name="email" required />
                  </div>
                  <div class="input-group">
                    <label for="senha">Senha</label>
                    <input class="input_login" type="password" placeholder="Senha..." aria-label="Digite a sua senha"
                      name="senha" id="senha" required />
                  </div>
                  <div class="input-group">
                    <label for="cnpj">Cpf/Cnpj</label>
                    <input class="input_login" type="text" placeholder="Ex: 123.321.45-10" aria-label="Digite seu Cnpj"
                      name="cpf/cnpj" id="cpf/cnpj" required />
                  </div>
                  <div class="input-group">
                    <label for="nome">Nome</label>
                    <input class="input_login" type="text" placeholder="Ex: Joao" aria-label="Digite seu nome" name="nome"
                      id="nome" required />
                  </div>
                  <div class="input-group">
                    <label for="nascimento">Nascimento</label>
                    <input class="input_login" type="text" placeholder="Ex: 27/03/1990"
                      aria-label="Digite a data de nascimento" name="nascimento" id="nascimento" required />
                  </div>
                </div>
                <div class="form-control">
                  <h3>Endereço</h3>
                  <div class="input-group">
                    <label for="cidade">Cidade</label>
                    <input class="input_login" type="text" placeholder="Ex: SP" aria-label="Digite sua cidade" name="cidade"
                      id="cidade" required />
                  </div>
                  <div class="input-group">
                    <label for="cnpj">Cep</label>
                    <input class="input_login" type="text" placeholder="Ex: 080-60-090" aria-label="Digite seu Cnpj"
                      name="cep" id="cep" required />
                  </div>
                  <div class="input-group">
                    <label for="bairro">Bairro</label>
                    <input class="input_login" type="text" placeholder="Ex: 02789-089" aria-label="Digite seu bairro"
                      name="bairro" id="bairro" required />
                  </div>
                  <div class="input-group">
                    <label for="endereco">Endereço</label>
                    <input class="input_login" type="text" placeholder="Ex: Rua Albuquerque de Sas"
                      aria-label="Digite seu endereço" name="endereco" id="endereco" required />
                  </div>
                  <div class="input-group">
                    <label for="numero">Número</label>
                    <input class="input_login" type="text" placeholder="Ex: 138 " aria-label="Digite seu número" name="numero"
                      id="numero" required />
                  </div>
                </div>
                <div class="buttonContainer">
                  <button type="submit" class="btn_login2">Cadastrar</button>
                </div>
              </form>
            </section>
          </div>
        </main>
        <Footer />
      </body>
    );
  }
}
export default Entrar;