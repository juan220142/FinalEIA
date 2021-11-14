import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibo extends Component{
    constructor() {
        super();
        this.state ={
            total:-1,
            numero:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(e) {
        e.preventDefault()

        console.log(this.state.numero)
        const url = 'https://something-usefull.herokuapp.com/api/fibo'

        const set = {
            method: 'get',
            url: url,
            headers:{
                'numero':this.state.numero
            }
        };

        const response = await Axios(set)

        const data = response.data.arra
        console.log(data)
        this.setState({
            total:  data.map((n)=>
                <li>{n}</li>
            )
        })
    }
    render(){
        return(
            <div className="base2">
            <div className="div1">
                <h1>Fibonacci</h1>

                <form onSubmit={this.onFinish}>
                    <label for="inp">Ingrese el número :</label>
                    <input type="number" name="inp" min={1} max={9999}onChange={e => this.setState({numero:e.target.value}) }/>
                    <button type="submit">Procesar</button>

                    <Link to="/" ><button>Volver</button></Link>
                </form>
            </div>
                {this.state.total.length > 0
                &&(
                    <div className="result">
                        <div className="titleHolder">
                            <h1>Resultado: </h1>
                            {this.state.total}
                        </div>
                    </div>
                )
                } {this.state.total.length === 0 && (
                <div><h1> ingresa el dato correspondiente</h1></div>
            ) }
            </div>

        );
    }
}
export default Fibo;