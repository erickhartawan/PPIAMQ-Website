import "./App.sass";
import Navbar from "./components/layouts/Navbar"

import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/aboutus" component={AboutUs} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
