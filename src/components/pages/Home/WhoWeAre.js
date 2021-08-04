import ReadMore from "./ReadMore";
import "./WhoWeAre.sass";

function WhoWeAre() {
    return (
        <div className="container">
            <div className="left">
                <div className="title">WHO WE ARE</div>
                <p className="who-we">
                    Founded by the increasing number of Indonesian students at
                    Macquarie University, PPIA Macq was established as a
                    community that bridges between over 600 Indonesians in
                    Macquarie to date
                </p>
                <div>
                    <ReadMore />
                </div>
                <div className="grey-block"></div>
            </div>

            <div className="middle">
                <div className="grey-block"></div>
            </div>
            <div className="right">
                <div className="grey-block"></div>
            </div>
        </div>
    );
}

export default WhoWeAre;
