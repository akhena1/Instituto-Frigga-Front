import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IconLogin from '../../assets/img/iconperfil.svg';
import api from '../../services/api';
import { parseJwt } from '../../services/auth';


class Entrar extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      senha: "",
      cpf_cnpj: "",
      nome: "",
      dataNascimento: "",
      cidade: "",
      cep: "",
      bairro: "",
      endereço: "",
      numero: "",
      isLoading : false,

      erroMensagem: ""
    }
  }

  atualizaEstado = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }
  realizarLogin(event){
    event.preventDefault();

    let usuario = {
      email: this.state.email,
      senha: this.state.senha
    }

    this.setState({ isLoading : true })

    api.post("/login", usuario)
      .then(response => {
        if(response.status === 200){
          localStorage.setItem('usuario-frigga', response.data.token)
          this.setState({isLoading : false})

          console.log("Meu token é: " + response.data.token)

          if(parseJwt().Role === 'Administrador'){
            this.props.history.push('/perfil');
          }else{
            this.props.history.push('/produto')
          }
        }
      })
      .catch(erro => {
        console.log("Erro:", erro)
        this.setState({ erroMensagem: "E-mail ou senha inválidos" })
        this.setState({isLoading: false})
      })

  }

  render() {
    return (
      <body>
        <Header />
        <main>
          <div className="container_login">
            <section className="esquerda_login">
              <form onSubmit={this.realizarLogin.bind(this)} id="form_login">
                <figure>
                  <img src={IconLogin}alt="icone do perfil" />
                </figure>
                <div className="form-control">
                  <div className="input-group">
                    <label>Usuario</label>
                    <input 
                    className="input_login" 
                    type="text" 
                    placeholder="E-mail.."
                    aria-label="Digite seu e-mail" 
                    name="email" id="usuarioCadastro" 
                    value={this.state.email}
                    onChange={this.atualizaEstado}
                    required />
                  </div>
                  <div className="input-group">
                    <label>Senha</label>
                    <input 
                    className="input_login" 
                    type="password" 
                    placeholder="Senha..." 
                    aria-label="Digite a sua senha"
                    name="senha" 
                    id="senhaCadastro" 
                    value={this.state.senha}
                    onChange={this.atualizaEstado}
                    required />
                  </div>
                  {/* <div className="buttonsContainer">
                    <button className="btn_login" type="submit">Entrar</button>
                  </div> */}

                  {
                    this.state.isLoading === true &&
                    <div className="buttonsContainer">
                      <button className="btn_login" type="submit" disabled>Carregando..</button>
                    </div>
                  }
                  {
                    this.state.isLoading === false &&
                    <div className="buttonsContainer">
                    <button className="btn_login" type="submit">Entrar</button>
                  </div>
                  }
                </div>
              </form>
              <p style={{ color : 'red' }}>{this.state.erroMensagem}</p>
            </section>

            <section className="direita_login">
              <h1> Cadastro </h1>
              <form method="POST" id="form_cadastro">
                <div className="form-control">
                  <div className="input-group radio-group">
                    <label><input type="radio" value="cliente" name="cadastro" id="cadastroCliente" />
                      Cliente</label>
                    <label>
                      <input type="radio" value="fornecedor" name="cadastro" id="cadastroFornecedor" />
                      Fornecedor
              </label>
                  </div>
                  <div className="input-group">
                    <label>E-mail</label>
                    <input className="input_login" type="email" placeholder="E-mail ou Cpf..."
                      aria-label="Digite seu e-mail ou cpf" id="email" name="email" required />
                  </div>
                  <div className="input-group">
                    <label>Senha</label>
                    <input className="input_login" type="password" placeholder="Senha..." aria-label="Digite a sua senha"
                      name="senha" id="senha" required />
                  </div>
                  <div className="input-group">
                    <label >Cpf/Cnpj</label>
                    <input className="input_login" type="text" placeholder="Ex: 123.321.45-10" aria-label="Digite seu Cnpj"
                      name="cpf/cnpj" id="cpf/cnpj" required />
                  </div>
                  <div className="input-group">
                    <label >Nome</label>
                    <input className="input_login" type="text" placeholder="Ex: Joao" aria-label="Digite seu nome" name="nome"
                      id="nome" required />
                  </div>
                  <div className="input-group">
                    <label >Nascimento</label>
                    <input className="input_login" type="text" placeholder="Ex: 27/03/1990"
                      aria-label="Digite a data de nascimento" name="nascimento" id="nascimento" required />
                  </div>
                </div>
                <div className="form-control">
                  <h2>Endereço</h2>
                  <div className="input-group">
                    <label>Cidade</label>
                    <input className="input_login" type="text" placeholder="Ex: SP" aria-label="Digite sua cidade" name="cidade"
                      id="cidade" required />
                  </div>
                  <div className="input-group">
                    <label >Cep</label>
                    <input className="input_login" type="text" placeholder="Ex: 080-60-090" aria-label="Digite seu Cnpj"
                      name="cep" id="cep" required />
                  </div>
                  <div className="input-group">
                    <label >Bairro</label>
                    <input className="input_login" type="text" placeholder="Ex: 02789-089" aria-label="Digite seu bairro"
                      name="bairro" id="bairro" required />
                  </div>
                  <div className="input-group">
                    <label>Endereço</label>
                    <input className="input_login" type="text" placeholder="Ex: Rua Albuquerque de Sas"
                      aria-label="Digite seu endereço" name="endereco" id="endereco" required />
                  </div>
                  <div className="input-group">
                    <label >Número</label>
                    <input className="input_login" type="text" placeholder="Ex: 138 " aria-label="Digite seu número" name="numero"
                      id="numero" required />
                  </div>
                </div>
                <div className="buttonContainer">
                  <button type="submit" className="btn_login2">Cadastrar</button>
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