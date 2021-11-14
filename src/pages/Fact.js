import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios"
class Facts extends Component{
    constructor() {
        super();
        this.state ={
            total:0,
            numero:0,
            error1:""
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

        var data ={}
        await Axios(set).then((response)=>{
            data= response.data
        }).catch((error)=>{
            data.error1=error.response.data.data

        })
        console.log(data)
        this.setState({total:data.data,error1:data.error1})
    }
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Factorial</h1>
                    <p></p>
                    <form onSubmit={this.onFinish}>
                        <label for="inp">Ingrese el número :</label>
                        <input type="number" name="inp" min={0} max={170} onChange={e => this.setState({numero:e.target.value}) } placeholder={0}/>
                        <button  type="submit">Procesar</button>

                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
                {this.state.total > 0
                &&(
                    <div>
                        <div>
                            <p id="factorial">Resultado: {this.state.total}</p>
                        </div>
                    </div>
                )
                }
                {this.state.error1}
            </div>

        );
    }
}
export default Facts;