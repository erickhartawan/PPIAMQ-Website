import "./Home.sass";
import logo from "../../assets/img/ppiamq_logo.png";
import WhoWeAre from "./Home/WhoWeAre";
import Events from "./Home/Events/Events";
import Seperator from "./Home/Seperator";
function Home() {
    return (
        <>
            <div className="home">
                <div className="landing flex-container">
                    <div className="logo">
                        <img src={logo} alt="PPIA MQ LOGOOOO" />
                    </div>
                    <div className="intro">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                    </div>
                    <div className="whitespace"></div>
                </div>
            </div>
            <WhoWeAre />
            <Seperator />
            <Events />
        </>
    );
}

export default Home;