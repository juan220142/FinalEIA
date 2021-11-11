import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";

class Fibo extends Component{
    render(){
        return(
            <div className="base">
                <div className="div1">
                    <h1>Area triangulo</h1>
                    <p>ingrese los datos solicitados</p>
                    <form>
                        <div>
                            <label htmlFor="inp">Lado base : </label>
                            <input type="number" name="inp"/></div>
                        <div><label htmlFor="insta">Valor Altura:</label>
                            <input type="number" name="insta"/></div>
                        <div><label htmlFor="ins">Lado derecho:</label>
                            <input type="number" name="ins"/></div>
                        <div><label htmlFor="inst">Lado izquierdo:</label>
                            <input type="number" name="inst"/></div>
                        <button>Procesar</button>
                        <p>Perimetro:</p>
                        <p>Area:</p>
                        <Link to="/"><button>Volver</button></Link>
                    </form>
                </div>
            </div>

        );
    }
}
export default Fibo;