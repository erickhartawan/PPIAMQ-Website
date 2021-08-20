import "./App.sass";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import MembershipBenefit from "./components/pages/MembershipBenefit";
function App() {
    return (
        <div className="App">
            <Navbar />
           <MembershipBenefit />
        </div>
    );
}

export default App;
