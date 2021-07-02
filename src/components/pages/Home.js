import "./Home.sass";
import logo from "../../assets/img/ppiamq_logo.png";
function Home() {
    return (
        <div className="home">
            <div className="landing flex-container">
                <div className="logo">
                    <img src={logo} alt="PPIA MQ LOGOOOO" />
                </div>
                <div className="intro">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    );
}

export default Home;
