import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibo extends Component{
    constructor() {
        super();
        this.state ={
            perimetro:0,
            area:0,
            lado_d:0,
            ladi_i:0,
            base:0,
            altura:0,
            error1:""


        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(e) {
        e.preventDefault()

        const url = 'https://something-usefull.herokuapp.com/api/trian'

        const set = {
            method: 'get',
            url: url,

            headers:{
                'lado_izquierdo':this.state.lado_i,
                'lado_derecho':this.state.lado_d,
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
                    <h1>Area triangulo</h1>
                    <p>ingrese los datos solicitados</p>
                    <form onSubmit={this.onFinish}>
                        <div>
                            <label htmlFor="inp">Lado base : </label>
                            <input type="number" name="inp"  min={1} max={9999} onChange={e => this.setState({base:e.target.value}) }/></div>
                        <div><label htmlFor="ins">Lado derecho :</label>
                            <input type="number" name="ins"  min={1} max={9999} onChange={e => this.setState({lado_d:e.target.value}) }/></div>
                        <div><label htmlFor="inst">Lado izquierdo :</label>
                            <input type="number" name="inst" min={1} max={9999} onChange={e => this.setState({lado_i:e.target.value}) }/></div>
                        <button type="submit">Procesar</button>
                        <Link to="/"><button>Volver</button></Link>
                        <h1>{this.state.error1}</h1>
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
export default Fibo;