import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";

class ACirc extends Component{
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Area circulo</h1>
                    <p>ingrese los datos solicitados</p>
                    <form>
                        <label for="inp">Ingrese el radio :</label>
                        <input type="number" name="inp"/>
                        <button>Procesar</button>
                        <p>Resultado:</p>
                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
            </div>

        );
    }
}
export default ACirc;