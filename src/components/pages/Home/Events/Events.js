import "./Events.sass";
import EventPhoto from "./EventComponents/EventPhoto";
import React from "react";
import CircleButton from "../../../Buttons/CircleButton";

function Events() {
    return (
        <div className="container events">
            <div className="left-event">
                <div className="title">EVENTS</div>
                <div className="left-photo">
                    <EventPhoto className="left-photo" />
                </div>
            </div>
            <div className="middle-event">
                <div className="middle-photo">
                    <EventPhoto />
                </div>
                <div className="middle-photo-bottom">
                    <EventPhoto />
                    <p className="caption">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
            </div>
            <div className="right-event">
                <div className="right-photo">
                    <EventPhoto />
                    <p className="caption ml-auto right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra cras in pretium. sit.
                    </p>
                </div>
                <div className="see-more-button">
                    <CircleButton data={{ text: "See More" }} />
                </div>
            </div>
        </div>
    );
}

export default Events;
