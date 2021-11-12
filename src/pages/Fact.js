import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import {Axios} from "axios"
class Facts extends Component{
    constructor() {
        super();
        this.state ={
            total:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(values) {

        console.log(values)

        const url = 'localhost:5000/api/fact'

        const set = {
            method: 'get',
            url: url,
            headers:{
                'dato':values.dato
            }
        };

        const response = await Axios(set)

        const data = response.data.data

        this.setState({total:data})
    }
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Factorial</h1>
                    <p></p>
                    <form>
                        <label for="inp">Ingrese el número :</label>
                        <input type="number" name="inp"/>
                        <button>Procesar</button>
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