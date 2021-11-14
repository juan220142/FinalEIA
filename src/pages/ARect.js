import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibo extends Component{
    constructor() {
        super();
        this.state ={
            area:-1,
            perimetro:0,
            base:0,
            altura:0,
            error1:""
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

        var data ={}
        await Axios(set).then((response)=>{
            data= response.data
        }).catch((error)=>{
            data.error1=error.response.data.data

        })

        console.log(data)
        this.setState({area:data.Area,perimetro:data.Perimetro,error1:data.error1})
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
                            <input type="number" name="inp" min={1} max={9999} onChange={e => this.setState({base:e.target.value}) }/></div>
                        <div><label htmlFor="insta">Valor Altura:</label>
                            <input type="number" name="insta" min={1} max={9999}  onChange={e => this.setState({altura:e.target.value}) }/></div>

                        <button type="submit">Procesar</button>

                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
                {this.state.area  > 0
                &&(
                    <div>
                        <div className="titleHolder">
                            <p id="perimetro">Perimetro: {this.state.perimetro}</p>
                            <p id="area"> Area: {this.state.area}</p>
                        </div>
                    </div>
                )
                }
                {this.state.error1}
            </div>


        );
    }
}
export default Fibo;