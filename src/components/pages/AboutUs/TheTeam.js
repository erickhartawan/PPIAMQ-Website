import CommitteePhoto from "../../photos/CommitteePhoto";
import "./TheTeam.sass";
import annie from "../../../assets/img/annie.png";
function TheTeam() {
    return (
        <div className="team-container">
            {/* will write a json to get data from  */}
            <div className="team-content">
                <div className="first-row d-flex flex-row justify-content-evenly align-items-center">
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                </div>
                <div className="first-row d-flex flex-row justify-content-evenly align-items-center">
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                    <div className="committee-photo p-2">
                        <CommitteePhoto
                            path={annie}
                            name="hehe"
                            title="presid"
                            email="email@ppia.com"
                            alt="photo of president"
                        />
                    </div>
                </div>
            </div>
            <div className="team-sidebar align-items-center">The Team</div>
        </div>
    );
}

export default TheTeam;
