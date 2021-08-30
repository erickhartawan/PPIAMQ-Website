import React from "react";
import "./AboutUs.sass";
import aboutLanding from "../../../assets/img/about-landing.png";
import TheTeam from "./TheTeam";
import OverlappedImages from "./OverlappedImages";

function AboutUs() {
    return (
        <>
            <div className="about-welcome">
                <img src={aboutLanding} alt="" className="about-photo" />
                <div className="our-story">
                    <div className="our-story-label">
                        <p>Our Story</p>
                    </div>
                    <div className="our-story-desc">
                        <h3>
                            Founded by the increasing number of indonesian
                            students and Macquarie University, PPIA Macquarie
                            was established as a community that bridges the
                            divide between over 600 Indonesians in Macquarie to
                            date.
                        </h3>
                        <div className="subtitle-container">
                            <p className="p-4">
                                PPIA Macquarie shares the pride of Indonesia -
                                nurturing each Indonesian student at Macquarie
                                University so they can perform at their best. As
                                a non-profit organization, PPIA Macquarie's
                                mission is to exemplify the benefits of an
                                organized union of students so all may receive
                                the opportunity to achieve their academic and
                                personal goals. PPIA Macquarie funtions under
                                "PPIA" Indonesian Students' Association of
                                Australia - the national organisation,
                                established in Canberra 1981
                            </p>
                            <p className="p-4">
                                PPIA Pusat has approximately 17000 tertiary
                                sutdents across Australa operating on three
                                different levels: National, State, and Local
                                Branches 29 Educational institutions. PPIA
                                Macquarie has a strong relationship with every
                                branch in Australia, especially with the local
                                branches in NSW which collectively operate under
                                the auspices of PPIA NSW or ISA NSW
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-vision">
                    <div className="vision-desc p-4">
                        {`"Making PPIA Macquarie as a place for fellow Indonesian
                        students to strengthen the ties between those who posess
                        adaptive attitudes and can contribute positive values to the
                        society"`}
                    </div>
                    <div className="vision-title">
                        Our <strong>Vision</strong>
                    </div>
                </div>
                <div className="wrapper">
                    <OverlappedImages />
                </div>
                <div className="our-mission">
                    <div className="mission-title">
                        {" "}
                        Our <strong>Mission</strong>
                    </div>
                    <div className="mission-desc">
                        <div className="mission-row">
                            <div className="mission-1">
                                {" "}
                                Instilling love for the motherland by conserving
                                our culture and contributing to the citizens of
                                Indonesia.{" "}
                            </div>
                            <div className="mission-2">
                                {" "}
                                Establishing relationships with fellow
                                Indonesian student associations and communities
                                at Macquarie University, and
                            </div>
                        </div>
                        <div className="mission-row">
                            <div className="mission-3">
                                Making PPIA Macquarie as a home for all of its
                                members to socialize and to develop their
                                talents and skills
                            </div>
                            <div className="mission4">
                                Becoming a liaison for all of Indonesian
                                students in Macquarie University with the
                                profesional world
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TheTeam />
        </>
    );
}

export default AboutUs;
