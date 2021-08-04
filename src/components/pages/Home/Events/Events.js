import "./Events.sass";
import EventPhoto from "./EventComponents/EventPhoto";
import React from "react";

function Events() {
    return (
        <div className="container events">
            <div className="left">
                <div className="title">EVENTS</div>
                <div className="left-photo">
                    <div className="caption-event-name">Event Name</div>
                    <EventPhoto className="left-photo" />
                </div>
            </div>
            <div className="middle"></div>
            <div className="right"></div>
        </div>
    );
}

export default Events;
