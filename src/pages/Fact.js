import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios"
class Facts extends Component{
    constructor() {
        super();
        this.state ={
            total:0,
            numero:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(e) {
        e.preventDefault()

        console.log(this.state.numero)
        const url = 'https://something-usefull.herokuapp.com/api/fact'

        const set = {
            method: 'get',
            url: url,
            headers:{
                'dato':this.state.numero
            }
        };

        const response = await Axios(set)

        const data = response.data.data
        console.log(data)
        this.setState({total:data})
    }
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Factorial</h1>
                    <p></p>
                    <form onSubmit={this.onFinish}>
                        <label for="inp">Ingrese el número :</label>
                        <input type="number" name="inp" onChange={e => this.setState({numero:e.target.value}) }/>
                        <button type="submit">Procesar</button>
                        <p>Resultado:</p>
                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
                {this.state.total > 0
                &&(
                    <div>
                        <div className="titleHolder">
                            <h2>Resultado{this.state.total}</h2>
                        </div>
                    </div>
                )
                }
            </div>

        );
    }
}
export default Facts;