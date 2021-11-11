import React from "react";
import Menu from "./pages/Menu";
import Fact from "./pages/Fact";
import Fibo from "./pages/Fibo";
import ACirc from "./pages/ACirc";
import ATriang from "./pages/ATriang";
import ARect from "./pages/ARect";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Menu/>}/>
                    <Route exact path="/fact" element={<Fact/>}/>
                    <Route exact path="/circ" element={<ACirc/>}/>
                    <Route exact path="/fib" element={<Fibo/>}/>
                    <Route exact path="/rect" element={<ARect/>}/>
                    <Route exact path="/triang" element={<ATriang/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
