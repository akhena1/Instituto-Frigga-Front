import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IconLogin from '../../img/iconperfil.svg'



class Entrar extends Component {
  constructor () {
    super () 
    this.state = {
      


    }
  }
    render() {
        return (
          <body>
          <Header/>
            <main>
              
            <div className="container_login">
              <section className="esquerda_login">
                <form method="POST" id="form_login">
                  <figure>
                    <img src={IconLogin} alt="icone do perfil" />
                  </figure>
                  <div className="form-control">
                    <div className="input-group">
                      <label for="usuarioCadastro">Usuario</label>
                      <input className="input_login" type="text" placeholder="E-mail ou Cpf..."
                        aria-label="Digite seu e-mail ou cpf" name="usuario" id="usuarioCadastro" required />
                    </div>
                    <div className="input-group">
                      <label for="senhaCadastro">Senha</label>
                      <input className="input_login" type="password" placeholder="Senha..." aria-label="Digite a sua senha"
                        name="senha" id="senhaCadastro" required />
                    </div>
                    <div className="buttonsContainer">
                      <button className="btn_login" type="submit">Entrar</button>
                    </div>
                  </div>
                </form>
              </section>
        
              <section className="direita_login">
                  <h1> Cadastro </h1>
                <form method="POST" id="form_cadastro">
                  <div className="form-control">
                    <div className="input-group radio-group">
                      <label for="cadastroCliente"><input type="radio" value="cliente" name="cadastro" id="cadastroCliente" />
                        Cliente</label>
                      <label for="cadastroFornecedor">
                        <input type="radio" value="fornecedor" name="cadastro" id="cadastroFornecedor" />
                        Fornecedor
                      </label>
                    </div>
                    <div className="input-group">
                      <label for="email">E-mail</label>
                      <input className="input_login" type="email" placeholder="E-mail ou Cpf..."
                        aria-label="Digite seu e-mail ou cpf" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                      <label for="senha">Senha</label>
                      <input className="input_login" type="password" placeholder="Senha..." aria-label="Digite a sua senha"
                        name="senha" id="senha" required />
                    </div>
                    <div className="input-group">
                      <label for="cnpj">Cnpj</label>
                      <input className="input_login" type="text" placeholder="Ex: 123.321.45-10" aria-label="Digite seu Cnpj"
                        name="cnpj" id="cnpj" required />
                    </div>
                    <div className="input-group">
                      <label for="nome">Nome</label>
                      <input className="input_login" type="text" placeholder="Ex: Joao" aria-label="Digite seu nome" name="nome"
                        id="nome" required />
                    </div>
                    <div className="input-group">
                      <label for="nascimento">Nascimento</label>
                      <input className="input_login" type="text" placeholder="Ex: 27/03/1990"
                        aria-label="Digite a data de nascimento" name="nascimento" id="nascimento" required />
                    </div>
                  </div>
                  <div className="form-control">
                    <h3>Endereço</h3>
                    <div className="input-group">
                      <label for="cep">Cep</label>
                      <input className="input_login" type="text" placeholder="Ex: 02789-089" aria-label="Digite seu cep" name="cep"
                        id="cep" required />
                    </div>
                    <div className="input-group">
                      <label for="endereco">Endereço</label>
                      <input className="input_login" type="text" placeholder="Ex: Rua Albuquerque de Sas"
                        aria-label="Digite seu endereço" name="endereco" id="endereco" required />
                    </div>
                    <div className="input-group">
                      <label for="numero">Número</label>
                      <input className="input_login" type="text" placeholder="Ex: 138 " aria-label="Digite seu número" name="numero"
                        id="numero" required />
                    </div>
                    <div className="input-group">
                      <label for="bairro">Bairro</label>
                      <input className="input_login" type="text" placeholder="Ex: 02789-089" aria-label="Digite seu bairro"
                        name="bairro" id="bairro" required />
                    </div>
                    <div className="input-group">
                      <label for="estado">Estado</label>
                      <input className="input_login" type="text" placeholder="Ex: Sao Paulo" aria-label="Digite seu estado"
                        name="estado" id="estado" required />
                    </div>
                    <div className="input-group">
                      <label for="cidade">Cidade</label>
                      <input className="input_login" type="text" placeholder="Ex: SP" aria-label="Digite sua cidade" name="cidade"
                        id="cidade" required />
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <button type="submit" className="btn_login2">Cadastrar</button>
                  </div>
                </form>
              </section>
            </div>
          </main>
          <Footer/>
          </body>
            );
        }
    }
    export default Entrar;