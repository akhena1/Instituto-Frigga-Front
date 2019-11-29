import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import api from '../../services/api';

class VerReceita extends Component{

    constructor(){
        super();
        this.state = {
            listarReceita: [],
        }
    }

    componentDidMount(){
        this.getReceita();
    }

    getReceita = () =>{
        api.get('/receita') .then(response =>
            {
                if(response.status === 200){
                    this.setState({listarReceita : response.data})
                }
            })
    }

    render(){
        return(
        <div>
        <Header/>
                
        <section className="container_geral">

<section className="container-categorias">
    <h2>CATEGORIAS</h2>
    <div className="bar_bar"></div>
    <div className="categorias">
        <div className="align">
            <p>MASSAS</p><br></br>
            <div className="categ_5">
                <a href="#"></a>
            </div>
        </div>
        <div className="align">
            <p>SOPAS</p><br></br>
            <div className="categ_6">
                <a href="#"></a>
            </div>
        </div>
        <div className="align">
            <p>SALADAS</p><br></br>
            <div className="categ_7">
                <a href="#"></a>
            </div>
        </div>
        <div className="align">
            <p>SOBREMESA</p><br></br>
            <div className="categ_8">
                <a href="#"></a>
            </div>
        </div>
    </div>
</section>

            <div class="direita-receita">
                <div class="banner-receita1"></div>
                <div class="receita-text1">

                    <h3 class="h3titulo">Aprenda a montar marmita gourmet</h3>
                    <p> O Marmita Gourmet é, provavelmente, uma das ideias mais bacanas que surgiram nos últimos tempos
                        relacionadas à comida light.Iniciativa da chef Caro Gall, a mente por trás das delícias da All
                        Light, que faz da correria do dia a dia mais um motivo para as pessoas se alimentarem de forma
                        saudável e gostosa.

                        <br></br>O serviço funciona baseado em uma consultoria com o objetivo de entregar um cardápio variado
                        durante todos os dias da semana para quem tem pouco tempo, mas não deixa de lado o cuidado com a
                        saúde.
                    </p>
                        <h3 class="title_receit">Ingredientes</h3>
                    
                        <p>• 180g de ovos (3 unidades)
                        <br></br>• 200ml de creme de leite
                        <br></br>• 250g de presunto picado
                        <br></br>• 250g de muçarela picada
                        <br></br>• 250g de tomates sem sementes picados (2 unidades)
                        <br></br>• Salsinha picada a gosto
                        <br></br>• 100g de bacon frito
                    </p>

                    <h3 class="title_receit">Modo de Preparo</h3>
                        <p>• Misturar todos os ingredientes
                        <br></br>• Utilize para rechear a quiche
                        <br></br>• Misturar todos os ingredientes
                        <br></br>• Colocar a massa nas forminhas
                        <br></br>• Adicionar o recheio
                        <br></br>• Levar para assar em forno pré-aquecido a 180° C, <br></br>por aproximadamente 30 minutos ou até
                        dourar
                    </p>
                </div>
            </div>
        </section>
        <Footer/>

            </div>
        );
    }
}
export default VerReceita;