import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios";

class ACirc extends Component{
    constructor() {
        super();
        this.state ={
            total:0,
            radio:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(e) {
        e.preventDefault()

        const url = 'https://something-usefull.herokuapp.com/api/circ'

        const set = {
            method: 'get',
            url: url,
            headers:{
                'radio':this.state.radio
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
                    <h1>Area circulo</h1>
                    <p>ingrese los datos solicitados</p>
                    <form onSubmit={this.onFinish}>
                        <label for="inp">Ingrese el radio :</label>
                        <input type="number" name="inp" min={1} onChange={e => this.setState({radio:e.target.value}) }/>
                        <button type="submit">Procesar</button>

                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
                {this.state.area  > 0
                &&(
                    <div>
                        <div className="titleHolder">
                            <h1>Perimetro: {this.state.perimetro}</h1>
                            <h1> Area: {this.state.area}</h1>
                        </div>
                    </div>
                )
                }
            </div>

        );
    }
}
export default ACirc;