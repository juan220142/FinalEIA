import React,{Component} from "react";
import "../assets/css/base.css"
import {Link} from "react-router-dom";

class Fibo extends Component{
    render(){
        return(
            <div className="base">
            <div className="div1">
                <h1>Fibonacci</h1>

                <form>
                    <label for="inp">Ingrese el número :</label>
                    <input type="number" name="inp"/>
                    <button>Procesar</button>
                    <p>Resultado:</p>
                    <Link to="/" ><button>Volver</button></Link>
                </form>
            </div>
            </div>

        );
    }
}
export default Fibo;