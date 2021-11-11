import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";

class Fibo extends Component{
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Area rectangulo</h1>
                     <p>ingrese los datos solicitados</p>
                    <form>
                        <div><label htmlFor="inp"> Base :</label>
                            <input type="number" name="inp"/></div>
                        <div><label htmlFor="inc"> Altura :</label>
                            <input type="number" name="inc"/></div>

                        <button>Procesar</button>
                        <p>Resultado:</p>
                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
            </div>

        );
    }
}
export default Fibo;