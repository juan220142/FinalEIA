import React,{Component} from "react";
import '../assets/css/Menu.css';
import {Link} from "react-router-dom"
class Menu extends Component{
    render(){
        return(

                <div className="fondo">
                <div className="base">
                    <div className="div1">
                          <h1>seleccione la acción deseada</h1>
                    </div>
                    <div className="div2">
                        <Link to="/fact"><button id="fact">Factorial</button></Link>
                        <Link to="/fib"><button>Fibonacci</button></Link>
                        <Link to="/circ"><button>Area circulo</button></Link>
                        <Link to="/triang"><button>Area triangulo</button></Link>
                        <Link to="/rect"><button>Area rectangulo</button></Link>
                  </div>
                </div>
                </div>


        );
    }
}
export default Menu;