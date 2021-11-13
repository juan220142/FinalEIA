import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibo extends Component{
    constructor() {
        super();
        this.state ={
            area:0,
            perimetro:0,
            base:0,
            altura:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(e) {
        e.preventDefault()

        const url = 'https://something-usefull.herokuapp.com/api/rect'

        const set = {
            method: 'get',
            url: url,
            headers:{
                'base':this.state.base,
                'altura':this.state.altura
            }
        };

        const response = await Axios(set)

        const data = response.data
        console.log(data)
        this.setState({area:data.Area,perimetro:data.Perimetro})
    }
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Area rectangulo</h1>
                     <p>ingrese los datos solicitados</p>
                    <form onSubmit={this.onFinish}>
                        <div>
                            <label htmlFor="inp">Lado base : </label>
                            <input type="number" name="inp"  onChange={e => this.setState({base:e.target.value}) }/></div>
                        <div><label htmlFor="insta">Valor Altura:</label>
                            <input type="number" name="insta" onChange={e => this.setState({altura:e.target.value}) }/></div>

                        <button type="submit">Procesar</button>
                        <p>Resultado:</p>
                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
                {this.state.area  > 0
                &&(
                    <div>
                        <div className="titleHolder">
                            <h2>Perimetro: {this.state.perimetro}</h2>
                            <h2> Area: {this.state.area}</h2>
                        </div>
                    </div>
                )
                }
            </div>

        );
    }
}
export default Fibo;